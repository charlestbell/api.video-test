// We've created some helper functions for Node to make your signing-life easier
const { JWT } = require("@mux/mux-node");

const playbackId = "Tkgk5LC6an93zK1sDdaPkebJAdx0001E2A00kY1hXzDQ4g"; // Enter your signed playback id here

// Set some base options we can use for a few different signing types
// Type can be either video, thumbnail, gif, or storyboard
let baseOptions = {
  keyId: "sb9R00iH5Q5KagedjCsj02a0202Ri02WI7eUPaXearRBLuok", // Enter your signing key id here
  keySecret:
    "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcGdJQkFBS0NBUUVBdko0bnZzUHBtcmc1amZEekMvQ29pTm5yQSsyNTcwNkI5M3YzMzdPdFByeXdkbjcxClBRNzdHd0VLL1RSekE5SkQxaUxPMVV4MzZxa0xDYjg2T0d6enRWL1pZMEN3aGJZeXdETGVSUjF4ekN4aG1Na2YKSUFxR3pYRmVMS1ArWTZYYVFYRlhsNVFlb1h1ZnZjb0ZRd3R6bjBiNFpkd2RJUDJZVjNUQzFGbU1adzEwQmtpTgo0V1JlaXVINzJXcnBzUkVKZU1EdTlNY2FuTndXWDBUeDNlQTkvMlZaazJQdHZ5ZU1VZllJS0tPZkR0eW5uMlNqCmcrS0V4ekU5ZStFVkcrNWxSTGwzSFlzbWlCN0Y0ZjFYM2F1UjNkaGp0Zy9ZOTFGRENVVEp2eUE2dmxhQ2F2VDgKemtDdlYreHV1ZFhLTXNRd2x6bkd4NzhBNGp0S3ZNQ2RkVEdPYVFJREFRQUJBb0lCQVFDZW9henZwYms4WktBVApIb2hxakZaUjhtVFRnd1lUbThWMnJRNUZWOG5tcjY4Qm1ia0xSeVF0QysyQUVyS0Fqa0I3UWY4T0tTZlpkWjVRCjdrRTYzM2NBSGNLbzFPa2hLNkQzUUZEcmM5NFhSMlExcVVEQ0k5aEh4SWJkcUhiMHU3SVp4QWRVOWova3RDSWUKN2w4S2lnRU4vaFEvSnFaZzdxZEhObTM5UmVydFoxTitJZVlRNS9hUEJiM2s5enlXR2hxbFhGSEVkb1orSFlqUgp0Qm9IRTdha0M5SUNBdVFMdHN2MGFBUXJxanJmSzM2bG5IZjRXbkFZMVBzb3d3SXo4WUVSWkVXM08wYmhESDNRClRqUWxjOXBTSzFaQkI4SkVXU1Y2QllpM2djSmJBVXRRRENkdWtucHpiZFcxamZ6ZEpseEs2YXNMYnE5ZlkyOTgKYjlBTXhLQmhBb0dCQU41WmRZYzBZdkpGMlBSL2t1MmVML2VjOXlhY2JON0ZpUXVuSmpZZkJWU2RzK3VMWVh0cApOUENHclN1cklTTldKaTV4NXQwZ3B1T1Mzd25rdkM4cUJjdVhkbGNDLy9rc1NQUWsxcUxITUF1cnM3bkJ1Q3pGCmZLaUhLcWhmTUtqeXVibXRhb1lsZGJIMW9razZiUzdzbTE1TE5WVHdOVnRNMi92aUs0alQxbUhGQW9HQkFOa3AKMG5WaFdyLy9ZanpRNm92bW9iYldKNDByWnA3OW10b2ZNcFhud2FvK2ltOEVSOG82R3FvN3J3Q1NJNW51dzhSWgppUXR1SGpDMDdLNHBmbnphTFJnSWViMlRhejJUZXZCOTJIR3Y4SUR3SjVRbXJpMHp1QXBKM3IzSDQzd2w1NXRiClNybEV2OE9EVFU4TkNyZ1RFRG55NDFhY1BLZU5iU0t4bWhFTklEaFZBb0dCQU10QlVldVBtdWZIcStVTmZiMlQKZmx2RzlETXFpV2MzZ2VqU0dsOGRDbDFvY0NGZzMzTFdJSnZETVNnYkhvYlQ2TUZLUS9WZU5ORVI0S3VGbWZVdgpYKzdWZlV0YkphMmNxdS9yZ1AxNlFsUlkyRWwxYWF3YnQ3SERKZDZXYmIvemFvM3VsZE1kQ1RMdHpUVk5vS05sCmpUMnNXSXRWcmlEUTZNT2Y0NVlIdUJEVkFvR0JBTW1Ib1ZMak5RZW1wZkVRWkFuT3oxWlE2VVY5K0c4bHBOWTEKUzRtSUdOYTMwVnB6VzNnVmNmZDNDZEg2ek9VbWlqQ21jcUxUMzFxT0hITUgrT1UreDhoYzNUV01JR0oxZ2dxNgpqdW42UDdRNHFsSTNqejVObDhhY2hRUVVBMDJNRTZLK0Z0dFdMS3Z4Sndac2NQMGdXOWViUzFSdUMyL210RmdVCi80aEJhUnc5QW9HQkFKcFU5RkZpK2Q4UE1kU3Bqazd2a2drbzQ5SXNQbXdFalpKMmFOZEpWNmFEbDcvRTBrRjgKcDF4NHdOVW1HMkYwZ2cwV2hUT3hTM3ZoUjdsRFdlQm1PRk8rV0tQTnJYRGhTWUg2UW9vYktZM0F6VDJaRHJwRQpFN3dPMi9Jb1c5T2xSOWJ6cmM3Zld0cXNCNzR3YitPSW82eGVPUDlqMHExYkp5WHNKTzdSMkVSSwotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQo=", // Enter your base64 encoded private key here
  expiration: "7d", // E.g 60, "2 days", "10h", "7d", numeric value interpreted as seconds
};

const token = JWT.signPlaybackId(playbackId, { ...baseOptions, type: "video" });

console.log("TOKEN", token);

// Now the signed playback url should look like this:
// https://stream.mux.com/${playbackId}.m3u8?token=${token}

// If you wanted to pass in params for something like a gif, use the
// params key in the options object
// const gifToken = JWT.signPlaybackId(playbackId, {
// ...baseOptions,
// type: "gif",
// params: { time: 10 },
// });

// Then, use this token in a URL like this:
// https://image.mux.com/${playbackId}/animated.gif?token=${gifToken}

// A final example, if you wanted to sign a thumbnail url with a playback restriction
// const thumbnailToken = JWT.sign(playbackId, {
//   ...baseOptions,
//   type: 'thumbnail',
//   params: { playback_restriction_id: YOUR_PLAYBACK_RESTRICTION_ID },
// })

// When used in a URL, it should look like this:
// https://image.mux.com/${playbackId}/thumbnail.png?token=${thumbnailToken}
