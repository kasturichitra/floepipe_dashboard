const EXResponse = {
  //Pan API Response
  panNumberVerificationCurl: `curl --location 'https://Ntar.Pipelineservices.com/pan/panverifying' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "PanNumber": "AAAAAAAAAA"
    }'`,
  panNumberVerificationResponse: {
    "success": true,
    "response": {
      "message": {
        "code": 200,
        "result": {
          "PAN": "",
          "FIRST_NAME": "",
          "MIDDLE_NAME": "",
          "LAST_NAME": "",
          "AADHAR_NUM": "XXXXXXXX1234",
          "AADHAR_LINKED": true,
          "DOB_VERIFIED": "",
          "DOB_CHECK": "",
          "EMAIL": "",
          "DOB": "",
          "GENDER": "M",
          "IDENTITY_TYPE": "",
          "MOBILE_NO": "",
          "ADDRESS_1": "",
          "ADDRESS_2": " ",
          "ADDRESS_3": "",
          "PINCODE": "",
          "CITY": "",
          "STATE": "",
          "COUNTRY": "INDIA"
        }
      }
    }
  },

  panHolderNameverifyCurl: `curl --location 'https://Ntar.Pipelineservices.com/pan/panHolderNameVerify' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      name: 'Name',
      panNumber: 'AAAAAAAAAA' 
    }'`,
  panHolderNameverifyResponse: {
    "success": true,
    "response": {
      "success": true,
      "message": "valid",
      "response": "Your name is exactly matched with your pan card Name"
    }
  },

  DOBwithPanVerifyCurl: `curl --location 'https://Ntar.Pipelineservices.com/pan/dobVerify' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "panNumber": "ABCDE1234F"
    }'`,
  DOBwithPanVerifyResponse: {
    "success": true,
    "response": {
      "message": {
        "message": "valid",
        "success": true,
        "result": "Your Date of Birth in Pan is undefined"
      }
    }
  },

  // Aadhaar API Response
  AadhaarNumberCurl: `curl --location 'https://Ntar.Pipelineservices.com/aadhaar/sentAadhaarotp' \\
   --header 'Content-Type: application/json' \\
   --header 'secretKey: {{secretKey}}' \\
   --header 'clientId: {{clientId}}' \\
   --data '{
     aadharNumber: 'XXXXXXXX4321' 
   }'`,
  AadhaarNumberResponse: {
    "success": true,
    "response": {
      "success": true,
      "message": "Otp was Sent to your linked Mobile Number",
      "clientId": "ClientID"
    }
  },

  AadhaarOtpCurl: `curl --location 'https://Ntar.Pipelineservices.com/aadhaar/Aadhaarotpverify' \\
   --header 'Content-Type: application/json' \\
   --header 'secretKey: {{secretKey}}' \\
   --header 'clientId: {{clientId}}' \\
   --data '{
     otp: "OTO",
     client_id: "ClientID response form AadharNumber ",
     aadharNumber: 'XXXXXXXX4321' 
   }'`,
  AadhaarOtpResponse: {
    "client_id": "Cliend ID",
    "full_name": "Sri Ram",
    "aadhaar_number": "XXXXXXXX4321",
    "dob": "DOB",
    "gender": "Gender",
    "address": {
      "country": "",
      "dist": "",
      "state": "",
      "po": "",
      "loc": "",
      "vtc": "",
      "subdist": "",
      "street": "",
      "house": "",
      "landmark": ""
    },
    "face_status": false,
    "face_score": -1,
    "zip": "509202",
    "profile_image": "",
    "has_image": true,
    "email_hash": "",
    "mobile_hash": "Mobile_hash",
    "raw_xml": "",
    "zip_data": "",
    "care_of": "",
    "share_code": "",
    "mobile_verified": "",
    "reference_id": "",
    "aadhaar_pdf": {
      "full_name": "",
      "aadhaar_number": "",
      "dob": "",
      "gender": "Gender",
      "address": {
        "country": "",
        "dist": "",
        "state": "",
        "po": "",
        "loc": "",
        "vtc": "",
        "subdist": "",
        "street": "",
        "house": "",
        "landmark": ""
      },
      "house": "",
      "street": "",
      "landmark": "",
      "zip": "",
      "state": "",
      "dist": "",
      "subdist": "",
      "po": "",
      "loc": "",
      "vtc": "",
      "profile_image": "profile_image in base 64",
      "has_image": 'true or false',
      "share_code": "",
      "mobile_verified": "",
      "care_of": "",
      "downloadDate": "",
      "aadhaar_pdf": ""
    },
    "status": "success_aadhaar",
    "uniqueness_id": ""
  },

  //Mobile API Response
  MobileverificationCurl: `curl --location 'https://Ntar.Pipelineservices.com/otp/mobileOtp' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "mobileNumber": "99999 99999"
  }'`,
  MobileverificationResponse: {
    "success": true,
    "response": {
      "message": "OTP sent to 99999 99999",
      "success": "Otp sent to Your Mobile Number 99999 99999"
    }
  },

  MobileOTPverificationCurl: `curl --location 'https://Ntar.Pipelineservices.com/otp/mobileotpVerify' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "submittedOtp": "OTP"
  }'`,
  MobileOTPverificationResponse: {
    "success": true,
    "response": {
      "message": {
        "message": " Mobile Number 99999 99999 is Verified with Otp XXXX"
      }
    }
  },

  //ShopEstablishment API Response
  ShopEstablishmentCurl: `curl --location 'https://Ntar.Pipelineservices.com/shop/shopest' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "registrationNumber": "",
      "state": "",
  }'`,
  ShopEstablishmentResponse: {
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
  },

  //GST Api Response
  GSTCurl: `curl --location 'https://Ntar.Pipelineservices.com/gst/Gstinverify' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "gstinNumber": ""
  }'`,
  GSTResponse: {
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
  },

  //CIN API Response
  CinCurl: `curl --location 'https://Ntar.Pipelineservices.com/gst/verify/CinNumberverify' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
      "CIN": ""
  }'`,
  CinResponse: {
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
  },

  //Fatch API Response
  FatchmathCurl: `curl --location 'https://Ntar.Pipelineservices.com/face/facematchapi' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
            "userimage": base64UserImage,
            "aadharImage": base64AadharImage,
          }'`,
  FatchmathResponse: {
    "success": true,
    "response": {
      "message": "Valid Authentication",
      "success": true,
      "result": {
        "face_match_score": "100.00"
      }
    }
  },

  //BIN API Response
  BinCurl: `curl --location 'https://Ntar.Pipelineservices.com/bin/getapiDetails' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
            "bin": '6 digit of Credit card number',
          }'`,
  BinResponse: {
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
  },

  //Bank API Response
  BankAccountVerifyCurl: `curl --location 'https://Ntar.Pipelineservices.com/account/verify-bank-account' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
            "account_no": 'Account Number',
            "ifsc": 'IFSC code'
          }'`,
  BankAccountVerifyResponse: {
    "BeneficiaryName": "User Name",
    "AccountNumber": "Account Number",
    "IFSC": "IFSC Code",
    "Message": "VERIFIED"
  },
  
  //BanHolderVerifyCurl Api Response
  BankHolderVerifyCurl:`curl --location 'https://Ntar.Pipelineservices.com/verify/verifyholdername' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
            "account_no": 'Account Number',
            "ifsc": 'IFSC code',
            "panHolderName": 'PanHolderName'
          }'`,
  BankHolderVerifyResponse: {
    "success": true,
    "response": {
      "beneficiaryName": "beneficiaryName",
      "result": "VERIFIED",
      "message": "Your Given Name Matches With Your Account Name with Efficiency of 80",
      "verificationName": "verificationName"
    }
  },

  //CompareNameCurl Api Response
  CompareNameCurl:`curl --location 'https://Ntar.Pipelineservices.com/name/compareName' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
            "firstName": 'firstName',
            "secondName": 'secondName'
          }'`,
  CompareNameResponse:{
    "success": true,
    "response": {
      "firstName": "firstName",
      "secondName": "secondName",
      "responseData": {
        "data": "Your Name Comparison Comes with a accuracy of 100"
      }
    }
  },

  //IFSCVerify Api Response
  IFSCVerifyCurl:`curl --location 'https://Ntar.Pipelineservices.com/bin/getBankDetails' \\
    --header 'Content-Type: application/json' \\
    --header 'secretKey: {{secretKey}}' \\
    --header 'clientId: {{clientId}}' \\
    --data '{
            "ifsc": 'ifsc'
          }'`,
  IFSCVerifyResponse:{
    "message": "valid",
    "success": true,
    "response": {
      "MICR": "",
      "BRANCH": "",
      "ADDRESS": "",
      "STATE": "",
      "CONTACT": "+",
      "UPI": true,
      "RTGS": true,
      "CITY": "",
      "CENTRE": "",
      "DISTRICT": "",
      "NEFT": true,
      "IMPS": true,
      "SWIFT": null,
      "ISO3166": "IN-AP",
      "BANK": "",
      "BANKCODE": "",
      "IFSC": ""
    }
  }

}

export default EXResponse