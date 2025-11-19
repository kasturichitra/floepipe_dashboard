// ErrorResponse
export const ERROR_RESPONSES = {
  400: { message: "Bad Request", success: false },
  503: { message: "Service Unavailable", success: false },
  504: { message: "Gateway Timeout", success: false }
};

// success Response
export const Aadhaar = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/aadhaar/Aadhaarmaskedverify",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "AadhaarNumber Verification",
    headerTitle: "Verify AadhaarNumber using government KYC service",
    submitButton: 'Verify AadhaarNumber'
  },
  inputParams: ["aadharNumber"],

  exampleCurl: `curl --location 'http://localhost:7006/business/Gstinverify' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "aadharNumber": ""
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
export const GstIN = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/business/Gstinverify",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "GSTIN Verification",
    headerTitle: "Verify GSTIN using government KYC service",
    submitButton: 'Verify GSTIN'
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
    Method:'Post',
    URLS: "http://localhost:7006/shop/shopest",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "SHOP Verification",
    headerTitle: "Verify shop using government KYC service",
    submitButton: 'Verify Shop'
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
    Method:'Post',
    URLS: "http://localhost:7006/mobileNumber/mobileOtp",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "MobileNumber Verification (Send OTP To Number)",
    headerTitle: "Verify MobileNumber using government KYC service",
    submitButton: 'Send OTP to Number'
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
    Method:'Post',
    URLS: "http://localhost:7006/mobileNumber/mobileotpVerify",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "MobileNumber Verification (Verify OTP)",
    headerTitle: "Verify MobileNumber using government KYC service",
    submitButton: 'Verify OTP'
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
    Method:'Post',
    URLS: "http://localhost:7006/pan/panverifying",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Pan Verification",
    headerTitle: "Verify Pan using government KYC service",
    submitButton: 'Verify Pan'
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
    Method:'Post',
    URLS: "http://localhost:7006/pan/panToAadhaar",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Pan Verification",
    headerTitle: "Verify pan To Aadhaar using government KYC service",
    submitButton: 'Verify PantoAadhaar'
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
    Method:'Post',
    URLS: "http://localhost:7006/account/pennyDrop/verifyBankAccount",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Bank Account Verification",
    headerTitle: "Verify Account using government KYC service",
    submitButton: 'Verify Account'
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
export const CINVerify = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/business/CinNumberverify",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "CIN Verification",
    headerTitle: "Verify CIN using government KYC service",
    submitButton: 'Verify CIN'
  },
  inputParams: ["CIN"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "CIN": "",
    "COMPANY_NAME": "",
    "DATE_OF_REGISTRATION": "",
    "CITY": "",
    "DISTRICT": "",
    "STATE": "",
    "COUNTRY": "India",
    "PINCODE": "",
    "ROC": "",
    "CATEGORY": "",
    "SUBCATEGORY": "",
    "CLASS": "",
    "AUTHORIZED_CAPITAL": "",
    "PAIDUP_CAPITAL": "",
    "NUMBER_OF_MEMBERS": "",
    "ACTIVITY_DESCRIPTION": "0",
    "REGISTERED_OFFICE_ADDRESS": "",
    "GETDATA": 1,
    "TIMESTAMP": "",
    "COUNTRY_INC": "Indian",
    "F_COMPANY_SHARE_CAP": "null",
    "STATUS": "Active",
    "TYPE_OF_OFFICE": "",
    "FOREIGN_DETAILS": null,
    "FOREIGN_ADDRESS": null,
    "ACTIVITY_CODE": "null",
    "ADDRESS_OTHER_THAN_RO": "-",
    "EMAIL": "xyz@gmail.com",
    "LISTING_STATUS": "Unlisted",
    "ACTIVE_COMPLIANCE": "",
    "COMPANY_FILING_STATUS_16_17_18": "",
    "SUSPENDED_AT_STOCK": "-",
    "LAST_AGM": "09/30/2023",
    "LAST_BALANCESHEET": "03/31/2023",
    "CIRP": "",
    "PARTNERS": "",
    "PREVIOUS_FIRM": null,
    "SOLVENCY_FILED": "null",
    "COMPANY_STATUS": "Active",
    "old_cin": null,
    "PAN": "AAICC7291C",
    "has_financials": 1,
    "has_charges": 1,
    "IS_DOCS_PROCESSED": 0,
    "IS_AUDITOR_MOVED": 100,
    "PRIORITY_1": 100,
    "DOCS_PROCESS_ON": "2024-11-24T18:19:06.000Z",
    "MULTIPLE_ADDRESS": [
      {
        "city": "",
        "state": "",
        "country": "",
        "district": "",
        "locality": "",
        "officeType": "",
        "postalCode": "",
        "addressType": "",
        "activeStatus": "Y",
        "migrationFlag": "",
        "streetAddress": "",
        "streetAddress2": "",
        "streetAddress3": "",
        "streetAddress4": "",
        "establishmentDate": ""
      },
      {
        "city": "",
        "state": "",
        "country": "",
        "district": "",
        "locality": "NA",
        "officeType": "",
        "postalCode": "",
        "addressType": "",
        "activeStatus": "Y",
        "migrationFlag": "N",
        "streetAddress": "",
        "streetAddress2": "",
        "streetAddress3": "",
        "streetAddress4": "",
        "establishmentDate": ""
      },
      {
        "city": "",
        "state": "",
        "country": "",
        "district": "",
        "locality": "NA",
        "officeType": "",
        "postalCode": "",
        "addressType": "",
        "activeStatus": "Y",
        "migrationFlag": "N",
        "streetAddress": "",
        "streetAddress2": "",
        "streetAddress3": "",
        "streetAddress4": "",
        "establishmentDate": ""
      }
    ],
    "IS_ADDRESS_UPDATED": 1,
    "STOCKS": null,
    "WEBSITE": null,
    "LOGO": null,
    "INDUSTRY": null,
    "COMPANY_AGE": null,
    "MOBILE": null,
    "SHOWN_TO_WEBSITE": 1,
    "IS_PAN_SAVED": 0,
    "IS_MASKED_EMAIL_DONE": 1,
    "IS_CIN_DIN_MAP": 0,
    "ANNUAL_RETURNS_3YRS": [
      {
        "dataOfFilling": "",
        "financialYear": ""
      },
      {
        "dataOfFilling": "",
        "financialYear": ""
      },
      {
        "dataOfFilling": "",
        "financialYear": ""
      }
    ],
    "BALANCESHEET_3YRS": [
      {
        "dataOfFilling": "",
        "financialYear": ""
      },
      {
        "dataOfFilling": "",
        "financialYear": ""
      },
      {
        "dataOfFilling": "",
        "financialYear": ""
      }
    ],
    "MOVED_TO_NEW_DB": 0,
    "DIN_CONTACT_UPDATE": 0,
    "IS_BASIC": 1,
    "NEW_UPDATED_TIME": "",
    "NICCode1": "",
    "NICCode1Desc": "",
    "NICCode2": null,
    "NICCode2Desc": null,
    "NICCode3": null,
    "NICCode3Desc": null
  }
}
export const UdamVerify = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/udyam/verifyudyam",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "udyam Verification",
    headerTitle: "Verify Udyam number using government KYC service",
    submitButton: 'Verify Udyam number'
  },
  inputParams: ["udyamNumber"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "success": true,
    "response": {
      "message": "valid",
      "success": true,
      "response": {
        "bin": "6 digit of Credit card Number",
        "brand": "Card brand",
        "type": "",
        "category": "WORLD",
        "issuer": "",
        "issuer_phone": "",
        "issuer_url": "",
        "iso2": "",
        "iso3": "",
        "country": ""
      }
    }
  }
}
export const cardVerify = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/card/cardVerify",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Credit Card Verification",
    headerTitle: "Verify CreditCard using government KYC service",
    submitButton: 'Verify CreditCard'
  },
  inputParams: ["creditCardNumber"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "success": true,
    "response": {
      "message": "valid",
      "success": true,
      "response": {
        "bin": "6 digit of Credit card Number",
        "brand": "Card brand",
        "type": "",
        "category": "WORLD",
        "issuer": "",
        "issuer_phone": "",
        "issuer_url": "",
        "iso2": "",
        "iso3": "",
        "country": ""
      }
    }
  }
}
export const NameMatch = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/name/compareName",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Name Verification",
    headerTitle: "Verify Name using government KYC service",
    submitButton: 'Verify Name'
  },
  inputParams: ["firstName", "secondName"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "success": true,
    "response": {
      "message": "valid",
      "success": true,
      "response": {
        "bin": "6 digit of Credit card Number",
        "brand": "Card brand",
        "type": "",
        "category": "WORLD",
        "issuer": "",
        "issuer_phone": "",
        "issuer_url": "",
        "iso2": "",
        "iso3": "",
        "country": ""
      }
    }
  }
}

// Recharge Responses
export const RechargeOperators = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/Reacharge/Operators",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 1: Fetch Operators",
    headerTitle: "Fetch Service operators using NTAR service",
    submitButton: 'Operators Fetch'
  },
  inputParams: ["mobileNumber"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    },
    "success": true
  }
}
export const RechargePlans = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/Reacharge/Plans",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 2: Fetch Plans",
    headerTitle: "Fetch plans using NTAR service",
    submitButton: 'Fetch Plans'
  },
  inputParams: ["operatorcode", "cricle"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    },
    "success": true
  }
}
export const RechargeOldPlans = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/Reacharge/OldPlans",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "Fetch Old Plans",
    headerTitle: "Fetch old plans using NTAR service",
    submitButton: 'Fetch oldPlans'
  },
  inputParams: ["operatorcode", "cricle"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    },
    "success": true
  }
}
export const RechargeOffersPlans = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/Reacharge/OffersPlans",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 3: Fetch OffersPlans",
    headerTitle: "Fetch Offersplans using NTAR service",
    submitButton: 'Fetch Offers'
  },
  inputParams: ["operator_code", "mobile_no"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    },
    "success": true
  }
}
export const RechargeURL = {
  apiUrl: {
    Method:'Post',
    URLS: "http://localhost:7006/Reacharge/RechargeURL",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 4: RechargeURL",
    headerTitle: "Recharge using NTAR service",
    submitButton: 'Recharge'
  },
  inputParams: ["account", "actualAmount", "spKey", "transactionId", "geoCode", "customerNumber", "pincode"],

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    },
    "success": true
  }
}


// BBPS Responses
// export const BBPSServices = {
//   apiUrl: {
//     URLS: "http://localhost:7006/BBPS/bbps/services",
//     testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
//     liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
//   },
//   title: {
//     header: "STEP 1: Get Services",
//     headerTitle: "BBPS using NTAR service",
//     submitButton: 'Get Services'
//   },
//   inputParams: [],
//   exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
//     --header 'Content-Type: application/json' \\
//     --header 'secretKey: {{secretKey}}' \\
//     --header 'clientId: {{clientId}}' \\
//     --data '{
//       "panNumber": ""
//   }'`,
//   exampleResponse: {
//     "message": "Success",
//     "success": true,
//     "data": {
//       "ERROR": "0",
//       "STATUS": "1",
//       "Mobile": "918688571181",
//       "Operator": "Reliance Jio Infocomm Limited",
//       "OpCode": "11",
//       "Circle": "Andhra Pradesh",
//       "CircleCode": "49",
//       "Message": "Successfully"
//     } 
//   }
// };

export const BBPSCategory = {
  apiUrl: {
    Method:'Get',
    URLS: "http://localhost:7006/BBPS/bbps/billerInfo/:category",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 1: Get Category",
    headerTitle: "BBPS using NTAR service",
    submitButton: 'Get Category'
  },
  inputParams: ["category"],
  bodyParams:"(params)",
  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "success": true,
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    } 
  }
};

export const BBPSBillerInfo = {
  apiUrl: {
    Method:'Get',
    URLS: "http://localhost:7006/BBPS/bbps/billerInfo/:category",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 2: Get Biller Info",
    headerTitle: "BBPS using NTAR service",
    submitButton: 'Get Biller Info'
  },
  inputParams: ["billerId"],
  bodyParams:"(params)",
  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "success": true,
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    } 
  }
}

export const BBPSBillFetch = {
  apiUrl: {
    Method:'Get',
    URLS: "http://localhost:7006/BBPS/bbps/billerInfo/:category",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 3: Get Bill Fetch",
    headerTitle: "BBPS using NTAR service",
    submitButton: 'Get Bill Fetch'
  },
  inputParams: ["accessCode", "ver", "instituteId", "secretKey"],
  bodyParams:"params",

  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "success": true,
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    } 
  }
}

export const BBPSBillPay = {
  apiUrl: {
    Method:'POST',
    URLS: "http://localhost:7006/BBPS/bbps/billPayRequest",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 4: Get Bill Pay",
    headerTitle: "BBPS using NTAR service",
    submitButton: 'Get Bill Fetch'
  },
  inputParams: ["accessCode", "ver", "instituteId", "secretKey", "requestId"],
  bodyParams:"params",
  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "success": true,
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    } 
  }
}

export const BBPSBillValidation = {
  apiUrl: {
    Method:'POST',
    URLS: "http://localhost:7006/BBPS/bbps/billValidation",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 4: Bill Validation Fetch",
    headerTitle: "BBPS using NTAR service",
    submitButton: 'Bill Validate'
  },
  inputParams: ["accessCode", "ver", "instituteId", "secretKey"],
  bodyParams:"params",
  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "success": true,
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    } 
  }
}

export const BBPSBillQuickPay = {
  apiUrl: {
    Method:'POST',
    URLS: "http://localhost:7006/BBPS/bbps/billQuickPay",
    testUrl: "https://localhost:7007/V1/KYC/TEST/GSTIN/Gstinverify",
    liveUrl: "https://localhost:7007/V1/KYC/LIVE/GSTIN/Gstinverify"
  },
  title: {
    header: "STEP 5: Bill QuickPay",
    headerTitle: "BBPS using NTAR service",
    submitButton: 'Quick pay'
  },
  inputParams: ["accessCode", "ver", "instituteId", "secretKey", "requestId"],
  bodyParams:"(params*)",
  exampleCurl: `curl --location 'http://localhost:7006/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": ""
  }'`,
  exampleResponse: {
    "message": "Success",
    "success": true,
    "data": {
      "ERROR": "0",
      "STATUS": "1",
      "Mobile": "918688571181",
      "Operator": "Reliance Jio Infocomm Limited",
      "OpCode": "11",
      "Circle": "Andhra Pradesh",
      "CircleCode": "49",
      "Message": "Successfully"
    } 
  }
}




