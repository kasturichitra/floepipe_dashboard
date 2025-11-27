import React, { useEffect, useRef, useState, useCallback } from 'react';

// Tailwind custom configuration is handled via external script in a real environment,
// but custom styles and animations are defined here for the single-file mandate.

const customStyles = `
/* Base styles for the section/card container */
.flow-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Improved duration and smoother easing for scroll transition */
    transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out; 
    transform: translateY(0);
    opacity: 1;
    padding-top: 6rem;
    padding-bottom: 6rem;
}

/* Class applied when a section is *not* in focus (slides up/out of view) */
.slide-up {
    /* Reduced slide distance for a less jarring, stuck transition */
    transform: translateY(-30px);
    opacity: 0.1; /* More aggressive dimming for B/W focus */
    pointer-events: none;
}

#flow-overview-hero {
    z-index: 20;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#company-footer {
    min-height: 10vh;
}

/* Animation Keyframes */
@keyframes logFadeIn {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
}
.log-entry {
    animation: logFadeIn 0.5s ease-out forwards;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}
.pulse-active {
    animation: pulse 1s infinite;
}

/* Cursor blinking animation for the terminal simulation */
@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
.blinking-cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: #f9fafb; /* text-light */
    animation: blink 1s step-start infinite;
    vertical-align: middle;
}

.fade-in {
    opacity: 0;
    transition: opacity 0.3s ease-in;
}

.fade-in.visible {
    opacity: 1;
}
`;

const colorConfig = {
    'bg-main': '#0a0a0a',
    'bg-card': '#1f2937',
    'text-light': '#f9fafb',
    'highlight': '#3b82f6',
    'gray-medium': '#4b5563',
    'gray-light': '#d1d5db',
    'status-success': '#10b981',
};

const typingContent = `POST /api/v1/kyc/verify_identity HTTP/1.1
Host: api.flowpipe.com
X-Client-ID: FP_5a7...
Authorization: Bearer tok_g9h...

{
  "name": "Alex Johnson",
  "document_number": "P1234567"
}`;

const responseContent = `
[14:23:01.520] PROCESS: Request validated. Executing KYC service...
[14:23:01.670] SUCCESS: Document P1234567 verified.

Response Body:
{
  "status": "SUCCESS",
  "result_code": "KYC_PASS_001",
  "latency_ms": 150
}`;

const MainDashboardPage = () => {
    // Refs for sections (for IntersectionObserver)
    const sectionRefs = {
        hero: useRef(null),
        endpoints: useRef(null),
        inputs: useRef(null),
        response: useRef(null),
        system: useRef(null),
    };

    // Refs for animation elements (for direct DOM manipulation in animation)
    const typingAreaRef = useRef(null);
    const submitButtonRef = useRef(null);
    const responseAreaRef = useRef(null);
    const logEntriesRef = useRef([]);

    // The core typing and flow simulation logic
    const runFlowAnimation = useCallback(() => {
        const typingArea = typingAreaRef.current;
        const submitButton = submitButtonRef.current;
        const responseArea = responseAreaRef.current;

        if (!typingArea || !submitButton || !responseArea) return;

        let currentTypingTimeout;
        let currentLoopTimeout;
        let charIndex = 0;
        let currentContent = '';

        const clearTimeouts = () => {
            clearTimeout(currentTypingTimeout);
            clearTimeout(currentLoopTimeout);
        };

        const typeText = (content, targetElement, callback) => {
            // Remove previous cursor if it exists
            const existingCursor = targetElement.querySelector('.blinking-cursor');
            if (existingCursor) existingCursor.remove();

            charIndex = 0;
            currentContent = '';

            const cursorElement = document.createElement('span');
            cursorElement.className = 'blinking-cursor';
            targetElement.appendChild(cursorElement);

            const typeInterval = () => {
                if (charIndex < content.length) {
                    currentContent += content.charAt(charIndex);
                    targetElement.innerHTML = currentContent.replace(/\n/g, '<br>') + '<span class="blinking-cursor"></span>';
                    charIndex++;
                    targetElement.scrollTop = targetElement.scrollHeight; // Auto-scroll
                    currentTypingTimeout = setTimeout(typeInterval, 20);
                } else {
                    if (cursorElement) cursorElement.remove();
                    callback();
                }
            };
            typeInterval();
        };

        const startAnimation = () => {
            // 1. Reset State
            typingArea.innerHTML = '';
            responseArea.innerHTML = '';
            submitButton.style.opacity = '0';
            submitButton.classList.remove('pulse-active');
            responseArea.style.opacity = '0';

            // 2. Start Typing Request
            typeText(typingContent, typingArea, () => {
                // 3. Show and pulse "Submit" button
                submitButton.style.opacity = '1';
                submitButton.classList.add('pulse-active');

                // 4. Simulate Hitting Submit
                currentLoopTimeout = setTimeout(() => {
                    submitButton.classList.remove('pulse-active');
                    submitButton.style.opacity = '0.5';

                    // 5. Start Typing Response
                    typeText(responseContent, responseArea, () => {
                        responseArea.style.opacity = '1';

                        // 6. Loop after a pause
                        currentLoopTimeout = setTimeout(startAnimation, 3000);
                    });
                    responseArea.style.opacity = '1'; // Make response area visible before typing starts
                }, 1000);
            });
        };

        startAnimation();

        // Cleanup function
        return clearTimeouts;
    }, []);

    // Intersection Observer Logic
    useEffect(() => {
        const sections = [
            sectionRefs.hero.current,
            sectionRefs.endpoints.current,
            sectionRefs.inputs.current,
            sectionRefs.response.current,
            sectionRefs.system.current
        ].filter(Boolean); // Filter out null refs

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                const targetId = entry.target.id;
                const cardElement = entry.target.querySelector('.p-8');
                const logElements = logEntriesRef.current;

                if (entry.isIntersecting) {
                    entry.target.classList.remove('slide-up');
                    if (cardElement) cardElement.classList.add('shadow-2xl');

                    // Specific log animation when system card enters focus
                    if (targetId === 'focus-system-design') {
                        logElements.forEach((log, index) => {
                            if (log) log.style.animation = `logFadeIn 0.5s ease-out forwards ${index * 0.1}s`;
                        });
                    }
                } else {
                    entry.target.classList.add('slide-up');
                    if (cardElement) cardElement.classList.remove('shadow-2xl');

                    // Reset log animations when scrolling away
                    if (targetId === 'focus-system-design') {
                        logElements.forEach(log => {
                            if (log) log.style.animation = 'none';
                        });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        sections.forEach((section, index) => {
            if (index > 0) {
                section.classList.add('slide-up');
            }
            observer.observe(section);
        });

        // Start the Flow Animation
        const cleanupAnimation = runFlowAnimation();

        return () => {
            sections.forEach(section => observer.unobserve(section));
            cleanupAnimation();
        };
    }, [runFlowAnimation]);


    return (
        <div className="bg-bg-main font-sans text-text-light" style={{ backgroundColor: colorConfig['bg-main'], color: colorConfig['text-light'] }}>
            <style>{customStyles}</style>

            {/* Card 1: Full Flow Overview with Terminal Simulation */}
            <section id="flow-overview-hero" ref={sectionRefs.hero} className="flow-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
                    <h1 className="text-5xl font-extrabold text-text-light mb-4 text-center tracking-tight" style={{ color: colorConfig['text-light'] }}>FlowPipe: Live API Integration Demo</h1>
                    <p className="text-xl mb-12 text-center" style={{ color: colorConfig['gray-light'] }}>Watch the secure, real-time KYC verification flow in action.</p>

                    <div className="p-8 rounded-xl shadow-2xl border-t-4" style={{ backgroundColor: colorConfig['bg-card'], borderColor: colorConfig['highlight'] }}>
                        <h2 className="text-2xl font-bold mb-6 text-center border-b pb-4" style={{ color: colorConfig['text-light'], borderColor: colorConfig['gray-medium'] }}>Simulated API Call: Input to Response</h2>
                        
                        {/* Terminal/Video Flow Simulation Area */}
                        <div className="p-6 h-96 rounded-lg shadow-inner overflow-y-auto relative font-mono text-sm" style={{ backgroundColor: '#0f172a' }}>
                            <div className="mb-2" style={{ color: colorConfig['status-success'] }}>&gt; Connecting to FlowPipe API Gateway... <span style={{ color: colorConfig['text-light'] }}>[OK]</span></div>
                            <pre ref={typingAreaRef} className="text-sm whitespace-pre-wrap" style={{ color: colorConfig['text-light'] }}></pre>
                            
                            {/* Simulated submit button */}
                            <button ref={submitButtonRef} className="mt-4 px-4 py-2 font-bold rounded-md shadow-lg opacity-0 pointer-events-none transition-opacity duration-300" style={{ backgroundColor: colorConfig['highlight'], color: colorConfig['text-light'] }}>
                                Submit Request
                            </button>
                            
                            <pre ref={responseAreaRef} className="mt-4 text-sm whitespace-pre-wrap opacity-0 transition-opacity duration-500" style={{ color: colorConfig['status-success'] }}></pre>
                        </div>

                        <div className="text-center mt-6">
                            <p className="text-lg" style={{ color: colorConfig['gray-light'] }}>The animation loops to demonstrate the speed and clarity of the FlowPipe API. Scroll down for detailed documentation.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Card 1 */}

            {/* Card 2: Focus on API Endpoints and Client Keys */}
            <section id="focus-endpoints" ref={sectionRefs.endpoints} className="flow-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="p-8 rounded-xl shadow-2xl border-t-4" style={{ backgroundColor: colorConfig['bg-card'], borderColor: colorConfig['highlight'] }}>
                        <h2 className="text-3xl font-bold mb-4" style={{ color: colorConfig['highlight'] }}>Step 1: Authorization & Endpoints</h2>
                        <p className="text-lg mb-6" style={{ color: colorConfig['gray-light'] }}>Securely target the correct microservice using your private Client ID and keys.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-lg border" style={{ backgroundColor: colorConfig['bg-main'], borderColor: colorConfig['gray-medium'] }}>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: colorConfig['text-light'] }}>API Endpoints</h3>
                                <p className="text-sm mb-3" style={{ color: colorConfig['gray-light'] }}>Target the service you need.</p>
                                <code className="block p-2 rounded text-xs overflow-x-auto" style={{ backgroundColor: colorConfig['gray-medium'], color: colorConfig['text-light'] }}>
                                    POST /api/v1/kyc/verify_identity
                                </code>
                            </div>
                            <div className="p-4 rounded-lg border" style={{ backgroundColor: colorConfig['bg-main'], borderColor: colorConfig['gray-medium'] }}>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: colorConfig['text-light'] }}>Client ID & Keys</h3>
                                <p className="text-sm mb-3" style={{ color: colorConfig['gray-light'] }}>Authenticate via headers or tokens.</p>
                                <code className="block p-2 rounded text-xs overflow-x-auto" style={{ backgroundColor: colorConfig['gray-medium'], color: colorConfig['text-light'] }}>
                                    X-Client-ID: <span style={{ color: colorConfig['highlight'] }}>FP_5a7...</span>
                                </code>
                                <code className="block p-2 rounded text-xs overflow-x-auto mt-1" style={{ backgroundColor: colorConfig['gray-medium'], color: colorConfig['text-light'] }}>
                                    Authorization: Bearer <span style={{ color: colorConfig['highlight'] }}>tok_g9h...</span>
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Card 2 */}

            {/* Card 3: Focus on Input Fields / Payload */}
            <section id="focus-inputs" ref={sectionRefs.inputs} className="flow-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="p-8 rounded-xl shadow-2xl border-t-4" style={{ backgroundColor: colorConfig['bg-card'], borderColor: colorConfig['highlight'] }}>
                        <h2 className="text-3xl font-bold mb-4" style={{ color: colorConfig['highlight'] }}>Step 2: Define the Payload</h2>
                        <p className="text-lg mb-6" style={{ color: colorConfig['gray-light'] }}>A clean, predictable JSON schema is enforced to ensure data quality and integrity.</p>

                        <div className="p-4 rounded-lg border" style={{ backgroundColor: colorConfig['bg-main'], borderColor: colorConfig['gray-medium'] }}>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: colorConfig['text-light'] }}>Input Fields (JSON Body Example)</h3>
                            <pre className="p-3 rounded-md text-xs overflow-x-auto whitespace-pre-wrap" style={{ backgroundColor: '#0f172a', color: colorConfig['status-success'] }}>
{`{
  "user_id": "U1827345",
  "name": "Alex Johnson",
  "date_of_birth": "1990-01-01",
  "document_type": "passport",
  "document_number": "P1234567" 
}`}</pre>
                        </div>
                        <p className="text-sm mt-4" style={{ color: colorConfig['gray-light'] }}>The input is encrypted end-to-end before submission to the FlowPipe API Gateway.</p>
                    </div>
                </div>
            </section>
            {/* End Card 3 */}

            {/* Card 4: Focus on API Response */}
            <section id="focus-response" ref={sectionRefs.response} className="flow-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div className="p-8 rounded-xl shadow-2xl border-t-4" style={{ backgroundColor: colorConfig['bg-card'], borderColor: colorConfig['highlight'] }}>
                        <h2 className="text-3xl font-bold mb-4" style={{ color: colorConfig['highlight'] }}>Step 3: Receiving the Response</h2>
                        <p className="text-lg mb-6" style={{ color: colorConfig['gray-light'] }}>Get back a concise, high-fidelity response array detailing the verification outcome and audit metadata.</p>

                        <div className="p-4 rounded-lg border" style={{ backgroundColor: colorConfig['bg-main'], borderColor: colorConfig['gray-medium'] }}>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: colorConfig['text-light'] }}>Sample API Response Array</h3>
                            <pre className="p-3 rounded-md text-xs overflow-x-auto whitespace-pre-wrap" style={{ backgroundColor: '#0f172a', color: colorConfig['highlight'] }}>
{`[
  {
    "status": "${colorConfig['status-success'] === '#10b981' ? 'SUCCESS' : '<span style="color: ' + colorConfig['status-success'] + '">SUCCESS</span>'}",
    "result_code": "KYC_PASS_001",
    "verification_date": "2025-11-19T10:30:00Z",
    "data_points": {
      "name_match": true,
      "age_verified": true
    }
  },
  {
    "audit_log": "Record created in region EU-W1.",
    "latency_ms": 150
  }
]`}</pre>
                        </div>
                        <p className="text-sm mt-4" style={{ color: colorConfig['gray-light'] }}>Latency is always prioritized, ensuring minimal friction for your end-users.</p>
                    </div>
                </div>
            </section>
            {/* End Card 4 */}
            
            {/* Card 5: Focus on System Design and Logs */}
            <section id="focus-system-design" ref={sectionRefs.system} className="flow-section">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="p-8 rounded-xl shadow-2xl border-t-4" style={{ backgroundColor: colorConfig['bg-card'], borderColor: colorConfig['highlight'] }}>
                        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: colorConfig['highlight'] }}>Under the Hood: FlowPipe System Architecture</h2>
                        <p className="text-lg mb-8 text-center" style={{ color: colorConfig['gray-light'] }}>High-availability and speed built on a fault-tolerant, microservice infrastructure.</p>
                        
                        {/* System Diagram Visualization with Icons and Arrows (Inline SVG) */}
                        <div className="flex items-center justify-between p-4 rounded-lg shadow-inner border" style={{ backgroundColor: colorConfig['bg-main'], borderColor: colorConfig['gray-medium'] }}>
                            {/* Component 1: Entry Point */}
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: colorConfig['highlight'] }}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                <span className="text-sm font-medium mt-1" style={{ color: colorConfig['text-light'] }}>Gateway API</span>
                            </div>

                            {/* Arrow 1 */}
                            <div className="font-bold text-3xl" style={{ color: colorConfig['highlight'] }}>&#8594;</div>

                            {/* Component 2: Logic Layer */}
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: colorConfig['gray-light'] }}><rect x="3" y="12" width="18" height="8" rx="2" ry="2"/><polyline points="12 4 12 12"/><line x1="12" y1="4" x2="16" y2="8"/><line x1="12" y1="4" x2="8" y2="8"/></svg>
                                <span className="text-sm font-medium mt-1" style={{ color: colorConfig['text-light'] }}>Microservices</span>
                            </div>
                            
                            {/* Arrow 2 */}
                            <div className="font-bold text-3xl" style={{ color: colorConfig['highlight'] }}>&#8594;</div>

                            {/* Component 3: Data Storage */}
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: colorConfig['status-success'] }}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V2L4 3v12z"/><path d="M4 15h16"/><path d="M4 15v7s1 1 4 1 5-2 8-2 4 1 4 1v-7"/></svg>
                                <span className="text-sm font-medium mt-1" style={{ color: colorConfig['text-light'] }}>Data Store (DB/Logs)</span>
                            </div>
                        </div>

                        {/* Live Log Simulation */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-3" style={{ color: colorConfig['text-light'] }}>Real-time Log Streams</h3>
                            <div className="p-4 rounded-md h-32 overflow-hidden relative border" style={{ backgroundColor: '#0f172a', color: colorConfig['gray-light'], borderColor: colorConfig['gray-medium'] }}>
                                {/* Log entries using refs for animation control */}
                                <div ref={el => logEntriesRef.current[0] = el} className="text-xs log-entry" style={{ animationDelay: '0s' }}>
                                    <span style={{ color: colorConfig['highlight'] }}>[14:23:01.120]</span> <span className="font-bold" style={{ color: colorConfig['text-light'] }}>REQ:</span> Inbound /kyc/verify_identity from FP_5a7...
                                </div>
                                <div ref={el => logEntriesRef.current[1] = el} className="text-xs log-entry mt-1" style={{ animationDelay: '0.1s' }}>
                                    <span style={{ color: colorConfig['status-success'] }}>[14:23:01.185]</span> <span className="font-bold" style={{ color: colorConfig['text-light'] }}>AUTH:</span> Token validated. User U1827345 authorized.
                                </div>
                                <div ref={el => logEntriesRef.current[2] = el} className="text-xs log-entry mt-1" style={{ animationDelay: '0.2s' }}>
                                    <span style={{ color: colorConfig['highlight'] }}>[14:23:01.350]</span> <span className="font-bold" style={{ color: colorConfig['text-light'] }}>PROC:</span> Calling external document verification service...
                                </div>
                                <div ref={el => logEntriesRef.current[3] = el} className="text-xs log-entry mt-1" style={{ animationDelay: '0.3s' }}>
                                    <span style={{ color: colorConfig['status-success'] }}>[14:23:01.480]</span> <span className="font-bold" style={{ color: colorConfig['text-light'] }}>DONE:</span> Response generated, status 200. Latency: 360ms.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Card 5 */}

            {/* Footer */}
            <footer id="company-footer" className="py-6 border-t" style={{ backgroundColor: colorConfig['bg-card'], color: colorConfig['text-light'], borderColor: colorConfig['gray-medium'] }}>
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm" style={{ color: colorConfig['gray-medium'] }}>&copy; 2025 FlowPipe Solutions. All Rights Reserved. | Secure API Services</p>
                </div>
            </footer>
            {/* End Footer */}
        </div>
    );
};

export default MainDashboardPage;