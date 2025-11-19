export const GstIN = {
  apiUrl: {
    URLS: "http://localhost:7006/business/Gstinverify",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "GSTIN",
    headerTitle: "Verify GSTIN using government KYC service",
    submitButton:'Verify GSTIN'
  },
  inputParams: ["gstinNumber"],

  exampleCurl: `curl --location 'http://localhost:7006/business/Gstinverify' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "gstinNumber": ""
  }'`,
  exampleResponse: {
    "message": {
      "request_id": "",
      "task_id": "",
      "group_id": "",
      "success": "",
      "response_code": "100",
      "response_message": "Valid Authentication",
      "metadata": {
        "billable": "Y"
      },
      "result": {
        "business_constitution": "Private Limited Company",
        "business_nature": [
          "Supplier of Services"
        ],
        "central_jurisdiction": "",
        "central_jurisdiction_code": "NA",
        "current_registration_status": "Active",
        "gstin": "",
        "last_updated": "NA",
        "legal_name": "ABC PRIVATE LIMITED",
        "other_business_address": "",
        "primary_business_address": {
          "building_name": "3rd Floor",
          "building_number": "H.No. 5-5-165/2/TF Plot no. 4",
          "city": "",
          "district": "",
          "flat_number": "",
          "latitude": "",
          "location": "",
          "longitude": "",
          "business_nature": "",
          "pincode": "",
          "street": "",
          "state_code": "",
          "full_address": ""
        },
        "register_cancellation_date": "",
        "register_date": "",
        "state_jurisdiction": "",
        "state_jurisdiction_code": "NA",
        "tax_payer_type": "Regular",
        "trade_name": "ABC PRIVATE LIMITED"
      },
      "request_timestamp": "",
      "response_timestamp": ""
    },
    "success": true
  }
};
export const SHOP = {
  apiUrl: {
    URLS: "http://localhost:7006/shop/shopest",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "SHOP",
    headerTitle: "Verify shop using government KYC service",
    submitButton:'Verify Shop'
  },
  inputParams: ['registrationNumber', 'state'],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "gstinNumber": ""
  }'`,
  exampleResponse: {
    "essentials": {
      "registrationNumber": "registrationNumber",
      "state": "State",
      "category": ""
    },
    "id": "",
    "patronId": "",
    "result": {
      "registrationNumber": "registrationNumber",
      "previousRegistrationCertificate": "NA",
      "nameOfTheShop": "",
      "address": "",
      "act": "Shops and Establishments",
      "dateOfCommencment": "",
      "summary": {
        "registrationNumber": "registrationNumber",
        "name": "",
        "status": "",
        "dateOfCommencement": "",
        "address": "",
        "splitAddress": {
          "district": [
            ""
          ],
          "state": [
            [
              "state",
              ""
            ]
          ],
          "city": [
            ""
          ],
          "pincode": "",
          "country": [],
          "addressLine": ""
        }
      },
      "detailed": {
        "registrationNumber": "registrationNumber",
        "previousRegistrationCertificate": "NA",
        "nameOfTheShop": "name of Shop",
        "act": ""
      }
    }
  }
};
export const SendOTP = {
  apiUrl: {
    URLS: "http://localhost:7006/mobileNumber/mobileOtp",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "MobileNumber (Send OTP To Number)",
    headerTitle: "Verify MobileNumber using government KYC service",
    submitButton:'Send OTP to Number'
  },
  inputParams: ['mobileNumber'],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "gstinNumber": ""
  }'`,
  exampleResponse: {
    "essentials": {
      "registrationNumber": "registrationNumber",
      "state": "State",
      "category": ""
    },
    "id": "",
    "patronId": "",
    "result": {
      "registrationNumber": "registrationNumber",
      "previousRegistrationCertificate": "NA",
      "nameOfTheShop": "",
      "address": "",
      "act": "Shops and Establishments",
      "dateOfCommencment": "",
      "summary": {
        "registrationNumber": "registrationNumber",
        "name": "",
        "status": "",
        "dateOfCommencement": "",
        "address": "",
        "splitAddress": {
          "district": [
            ""
          ],
          "state": [
            [
              "state",
              ""
            ]
          ],
          "city": [
            ""
          ],
          "pincode": "",
          "country": [],
          "addressLine": ""
        }
      },
      "detailed": {
        "registrationNumber": "registrationNumber",
        "previousRegistrationCertificate": "NA",
        "nameOfTheShop": "name of Shop",
        "act": ""
      }
    }
  }
};
export const VerifyOTP = {
  apiUrl: {
    URLS: "http://localhost:7006/mobileNumber/mobileotpVerify",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "MobileNumber (Verify OTP)",
    headerTitle: "Verify MobileNumber using government KYC service",
    submitButton:'Verify OTP'
  },
  inputParams: ["submittedOtp", "mobile"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "gstinNumber": ""
  }'`,
  exampleResponse: {
    "essentials": {
      "registrationNumber": "registrationNumber",
      "state": "State",
      "category": ""
    },
    "id": "",
    "patronId": "",
    "result": {
      "registrationNumber": "registrationNumber",
      "previousRegistrationCertificate": "NA",
      "nameOfTheShop": "",
      "address": "",
      "act": "Shops and Establishments",
      "dateOfCommencment": "",
      "summary": {
        "registrationNumber": "registrationNumber",
        "name": "",
        "status": "",
        "dateOfCommencement": "",
        "address": "",
        "splitAddress": {
          "district": [
            ""
          ],
          "state": [
            [
              "state",
              ""
            ]
          ],
          "city": [
            ""
          ],
          "pincode": "",
          "country": [],
          "addressLine": ""
        }
      },
      "detailed": {
        "registrationNumber": "registrationNumber",
        "previousRegistrationCertificate": "NA",
        "nameOfTheShop": "name of Shop",
        "act": ""
      }
    }
  }
};
export const panVerify = {
  apiUrl: {
    URLS: "http://localhost:7006/pan/panverifying",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Pan",
    headerTitle: "Verify Pan using government KYC service",
    submitButton:'Verify Pan'
  },
  inputParams: ["panNumber"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "essentials": {
      "registrationNumber": "registrationNumber",
      "state": "State",
      "category": ""
    },
    "id": "",
    "patronId": "",
    "result": {
      "registrationNumber": "registrationNumber",
      "previousRegistrationCertificate": "NA",
      "nameOfTheShop": "",
      "address": "",
      "act": "Shops and Establishments",
      "dateOfCommencment": "",
      "summary": {
        "registrationNumber": "registrationNumber",
        "name": "",
        "status": "",
        "dateOfCommencement": "",
        "address": "",
        "splitAddress": {
          "district": [
            ""
          ],
          "state": [
            [
              "state",
              ""
            ]
          ],
          "city": [
            ""
          ],
          "pincode": "",
          "country": [],
          "addressLine": ""
        }
      },
      "detailed": {
        "registrationNumber": "registrationNumber",
        "previousRegistrationCertificate": "NA",
        "nameOfTheShop": "name of Shop",
        "act": ""
      }
    }
  }
};
export const panHolderNameVerify = {
  apiUrl: {
    URLS: "http://localhost:7006/pan/panHolderNameVerify",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Pan",
    headerTitle: "Verify PanHolder & Name using government KYC service",
    submitButton:'Verify PanHolderName'
  },
  inputParams: ["panNumber", "name"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "essentials": {
      "registrationNumber": "registrationNumber",
      "state": "State",
      "category": ""
    },
    "id": "",
    "patronId": "",
    "result": {
      "registrationNumber": "registrationNumber",
      "previousRegistrationCertificate": "NA",
      "nameOfTheShop": "",
      "address": "",
      "act": "Shops and Establishments",
      "dateOfCommencment": "",
      "summary": {
        "registrationNumber": "registrationNumber",
        "name": "",
        "status": "",
        "dateOfCommencement": "",
        "address": "",
        "splitAddress": {
          "district": [
            ""
          ],
          "state": [
            [
              "state",
              ""
            ]
          ],
          "city": [
            ""
          ],
          "pincode": "",
          "country": [],
          "addressLine": ""
        }
      },
      "detailed": {
        "registrationNumber": "registrationNumber",
        "previousRegistrationCertificate": "NA",
        "nameOfTheShop": "name of Shop",
        "act": ""
      }
    }
  }
};
export const panDOBVerify = {
  apiUrl: {
    URLS: "http://localhost:7006/pan/panDobVerify",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Pan",
    headerTitle: "Verify Pan DOB using government KYC service",
    submitButton:'Verify Pan DOB'
  },
  inputParams: ["panNumber"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "essentials": {
      "registrationNumber": "registrationNumber",
      "state": "State",
      "category": ""
    },
    "id": "",
    "patronId": "",
    "result": {
      "registrationNumber": "registrationNumber",
      "previousRegistrationCertificate": "NA",
      "nameOfTheShop": "",
      "address": "",
      "act": "Shops and Establishments",
      "dateOfCommencment": "",
      "summary": {
        "registrationNumber": "registrationNumber",
        "name": "",
        "status": "",
        "dateOfCommencement": "",
        "address": "",
        "splitAddress": {
          "district": [
            ""
          ],
          "state": [
            [
              "state",
              ""
            ]
          ],
          "city": [
            ""
          ],
          "pincode": "",
          "country": [],
          "addressLine": ""
        }
      },
      "detailed": {
        "registrationNumber": "registrationNumber",
        "previousRegistrationCertificate": "NA",
        "nameOfTheShop": "name of Shop",
        "act": ""
      }
    }
  }
};
export const panAadhaarVerify = {
  apiUrl: {
    URLS: "http://localhost:7006/pan/panToAadhaar",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Pan",
    headerTitle: "Verify pan To Aadhaar using government KYC service",
    submitButton:'Verify PantoAadhaar'
  },
  inputParams: ["panNumber"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "essentials": {
      "registrationNumber": "registrationNumber",
      "state": "State",
      "category": ""
    },
    "id": "",
    "patronId": "",
    "result": {
      "registrationNumber": "registrationNumber",
      "previousRegistrationCertificate": "NA",
      "nameOfTheShop": "",
      "address": "",
      "act": "Shops and Establishments",
      "dateOfCommencment": "",
      "summary": {
        "registrationNumber": "registrationNumber",
        "name": "",
        "status": "",
        "dateOfCommencement": "",
        "address": "",
        "splitAddress": {
          "district": [
            ""
          ],
          "state": [
            [
              "state",
              ""
            ]
          ],
          "city": [
            ""
          ],
          "pincode": "",
          "country": [],
          "addressLine": ""
        }
      },
      "detailed": {
        "registrationNumber": "registrationNumber",
        "previousRegistrationCertificate": "NA",
        "nameOfTheShop": "name of Shop",
        "act": ""
      }
    }
  }
};
export const accountVerify = {
  apiUrl: {
    URLS: "http://localhost:7006/account/pennyDrop/verifyBankAccount",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Account",
    headerTitle: "Verify Account using government KYC service",
    submitButton:'Verify Account'
  },
  inputParams: ["account_no", "ifsc"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "essentials": {
      "registrationNumber": "registrationNumber",
      "state": "State",
      "category": ""
    },
    "id": "",
    "patronId": "",
    "result": {
      "registrationNumber": "registrationNumber",
      "previousRegistrationCertificate": "NA",
      "nameOfTheShop": "",
      "address": "",
      "act": "Shops and Establishments",
      "dateOfCommencment": "",
      "summary": {
        "registrationNumber": "registrationNumber",
        "name": "",
        "status": "",
        "dateOfCommencement": "",
        "address": "",
        "splitAddress": {
          "district": [
            ""
          ],
          "state": [
            [
              "state",
              ""
            ]
          ],
          "city": [
            ""
          ],
          "pincode": "",
          "country": [],
          "addressLine": ""
        }
      },
      "detailed": {
        "registrationNumber": "registrationNumber",
        "previousRegistrationCertificate": "NA",
        "nameOfTheShop": "name of Shop",
        "act": ""
      }
    }
  }
};
