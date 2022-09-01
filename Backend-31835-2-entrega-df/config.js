const config = {
    mongodb: {
      cnxStr: "mongodb://localhost/coderfinal",
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 5000,
      },
    },
    firebase: {
      "type": "service_account",
      "project_id": "backend-segunda-entrega-final",
      "private_key_id": "a2fd82f5ed114b0a16dfa9580b20f49c0d7332b7",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQChj1J9G/zKEXmJ\nzlsfq+r5UPqJKmD+NbvZ19AtQoTrA1Is6nzvamK+bogii95BMBXv0vWJinj1cs/a\nI5Qagz9G98KwsmNfglqQzUeSlPETi0pL+PTVTvYmxu3yxd6WAp8JzXp/KSZs3SD+\nfQSN1GBokBSRcFK7CeH6PYNTH7YN+ADFMi0Qj6CVAx3a4+192xWwF8cmVT+vftUo\n6Viq9Tl6uYAwpJX4bYSaApkRWHmGg9E7E/PrSj18Q1Ov9DM7F2odCUaUp72IT//r\ngxJZenwkFXLaLsCPzc3k7KvnSopWLX6lANXJOSgoye0HbVIQGukDGoGrxDKlccpv\n31jVFbE9AgMBAAECggEAI7JnvwX+kmVPDfBe+P4C8qh+Wu1WtgSIZ6dEM6Ple4nl\nz8/V4A6JF9uTT9LIvm2SA0YBA61pcY43N9Mxp7QFOLiIt4MK6vEB8smwvUYUiEV4\nGpY8/p6uS74bmE85EbstibxxiwQ8HcS0RBa6eV4KGUBwkvwXA4W4/RI3YJf6oVYn\nPMHiMrGcoRIkadEDTITDBj1JtJaXAaDFKwFCiuDH94Uqke2n2Ynmte7KHP8x7X7P\nOQdxO/2qQT4Nu+mOuxbsNqQJWyMviriRavW+DHXMM1VJn/ZAEfmVFGbAlxyu+ChD\nLvwwpxIIhuWEdDoZC2Wecbfwa8Z0LXx8kL0C2J3BwQKBgQDZvXRnm/MR8ZzCW2cU\nerGeTgb+NJKB7AmI5XiWd7SiCV/ODi4tIMT44uQ0SWK+KlQ0v/WGYtqYbKMkzkQl\nR2mmgsB+er1qEVXRPyox9xK2S3rXi23jbKM8Cm7dTZG8qhGurxh5B/OGo54nW7cj\n+Eaym2nTVWybprg+sk3wubAIIQKBgQC98rpMVe7fnQxc7kPpHghsctig9PAM/ORn\npK0K/+pvm1XkrVOhUHsP8GhIMrDq+9uorqiucUB/4ACEIUzdPmerp8lemVpxWAT9\nlAtsxPNWIWo2F1vNMiD6WqGkdM2sBfLuvnyEr+YuOmoudVkT8i3CWr4Ne0jWa1dh\n8YiuPLYVnQKBgDvwfG/dLU+ePHIAaWLo16ZlgmVOIZqkWIeX69c4AsCsZfQ6URnZ\nMH/3Laz7GrSQwHd49GTXJ6fYGB0Urwu4GexdiBIJRcVCGmasxbfVdRA7vQhC+LAn\ngtQPZy+CoADYrF9zEgCXYMGKnwnkpIjBWuzl/X7QwEIk5glUWkJPS5chAoGAXNA4\n9cnbkco0W0hVSJhTN2KatXNZxI7hsD8ICuLnk6dMPhPvVFh1+WDYI8cZKYjtWSwW\n4j4WbSVwOx/mZgjzMS4oOCAo0E9ZCOsI9hn6aPCk7E9XnRlMgeg9KZWlVdQGU2Ai\niddFWvtSHOdcImHouBoM2ZuPCK6koQgbaD/kHQUCgYAldYbprFH1LA6QLOzk4Wzz\nNqVz9AiAlagdNWpWPiVl6WKtAPHUthoCeVeTWVfw/mm4baPIdfaW5q+kJaNZuJKm\n8dxawXsinOb+oTMo4jSwoOLXnd3v8zQ4Aqon1BPyl4ndCtM2CZNLNDmvdGu8v7dA\nT10bSG+MDXYF4Im9jeyAIA==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-u1npa@backend-segunda-entrega-final.iam.gserviceaccount.com",
      "client_id": "108336988387827678622",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-u1npa%40backend-segunda-entrega-final.iam.gserviceaccount.com"
    },
  };
  
  module.exports = config;