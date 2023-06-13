---
keywords: Experience Platform;media edge;popular topics;date range
solution: Experience Platform
title: Getting started with Media Edge APIs
description: Media Edge APIs allow developers to collect data for Media Edge Analytics and Customer Journey Analytics.
exl-id: 
---

# Using the Open API Specification file for Media Edge APIs

This document includes a JSON Open API Specification (OAS), or "Swagger" reference. You can copy and paste this specification into a rendering tool, such as editor.swagger.io to view Media Edge API information. This specification includes parameters, examples, and schema for each endpoint.


```
{
  "openapi": "3.0.1",
  "info": {
    "title": "Media Analytics Edge API",
    "description": "The OpenAPI specification for Media Analytics Edge API",
    "version": "0.1"
  },
  "servers": [
    {
      "url": "https://edge.adobedc.net/ee-pre-prd/va/v1"
    },
    {
      "url": "https://edge.adobedc.net/ee/va/v1"
    }
  ],
  "paths": {
    "/adBreakComplete": {
      "post": {
        "description": "Signals the completion of an ad break",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.adBreakComplete"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.adBreakComplete\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/adBreakStart": {
      "post": {
        "description": "Signals the start of an ad break",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "advertisingPodDetails": {
                                  "type": "object",
                                  "properties": {
                                    "friendlyName": {
                                      "type": "string",
                                      "description": "The friendly name of the Ad Break."
                                    },
                                    "index": {
                                      "type": "integer",
                                      "description": "The index of the ad break inside the content starting at 1."
                                    },
                                    "offset": {
                                      "type": "integer",
                                      "description": "The offset of the ad break inside the content, in seconds."
                                    }
                                  },
                                  "required": [
                                    "index",
                                    "offset"
                                  ]
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "customMetadata": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      }
                                    }
                                  }
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "advertisingPodDetails",
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.adBreakStart"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.adBreakStart\",\n                \"mediaCollection\": {\n                    \"advertisingPodDetails\": {\n                        \"friendlyName\": \"Mid-roll\",\n                        \"offset\": 0,\n                        \"index\": 1\n                    },\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 15\n                },\n                \"timestamp\": \"2022-03-04T13:38:15+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.advertisingPodDetails.offset\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/adComplete": {
      "post": {
        "description": "Signals the completion of an ad",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.adComplete"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.adComplete\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/adSkip": {
      "post": {
        "description": "Signals an ad skip",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.adSkip"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.adSkip\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/adStart": {
      "post": {
        "description": "Signals the start of an ad",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "advertisingDetails": {
                                  "type": "object",
                                  "properties": {
                                    "name": {
                                      "type": "string",
                                      "description": "ID of the ad. (Any integer and/or letter combination)"
                                    },
                                    "advertiser": {
                                      "type": "string",
                                      "description": "Company/Brand whose product is featured in the ad"
                                    },
                                    "campaignID": {
                                      "type": "string",
                                      "description": "ID of the ad campaign"
                                    },
                                    "creativeID": {
                                      "type": "string",
                                      "description": "ID of the ad creative"
                                    },
                                    "creativeURL": {
                                      "type": "string",
                                      "description": "URL of the ad creative"
                                    },
                                    "length": {
                                      "type": "integer",
                                      "description": "Length of video ad in seconds"
                                    },
                                    "placementID": {
                                      "type": "string",
                                      "description": "Placement ID of the ad"
                                    },
                                    "friendlyName": {
                                      "type": "string",
                                      "description": "Friendly name of the ad"
                                    },
                                    "playerName": {
                                      "type": "string",
                                      "description": "The name of the player responsible for rendering the ad"
                                    },
                                    "siteID": {
                                      "type": "string",
                                      "description": "ID of the ad site"
                                    },
                                    "podPosition": {
                                      "type": "integer",
                                      "description": "The position (index) of the ad inside the parent ad break. The first ad has index 0, the second ad has index 1 etc"
                                    }
                                  },
                                  "required": [
                                    "name",
                                    "length",
                                    "playerName",
                                    "podPosition"
                                  ]
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "customMetadata": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      }
                                    }
                                  }
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "advertisingDetails",
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.adStart"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n  \"events\": [\n    {\n      \"xdm\": {\n        \"eventType\": \"media.adStart\",\n        \"mediaCollection\": {\n          \"advertisingDetails\": {\n            \"friendlyName\": \"Ad 1\",\n            \"name\": \"/uri-reference/001\",\n            \"length\": 10,\n            \"advertiser\": \"Adobe Marketing\",\n            \"campaignID\": \"Adobe Analytics\",\n            \"creativeID\": \"creativeID\",\n            \"creativeURL\": \"https://creativeurl.com\",\n            \"placementID\": \"placementID\",\n            \"siteID\": \"siteID\",\n            \"podPosition\": 11,\n            \"playerName\": \"HTML5 player\"\n          },\n          \"customMetadata\": [\n            {\n              \"name\": \"myCustomValue3\",\n              \"value\": \"c3\"\n            },\n            {\n              \"name\": \"myCustomValue2\",\n              \"value\": \"c2\"\n            },\n            {\n              \"name\": \"myCustomValue1\",\n              \"value\": \"c1\"\n            }\n          ],\n          \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n          \"playhead\": 15\n        },\n        \"timestamp\": \"2022-03-04T13:38:26+00:00\"\n      }\n    }\n  ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.advertisingDetails.name\",\n        \"reason\": \"Missing required field\"\n      },\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.advertisingDetails.length\",\n        \"reason\": \"Missing required field\"\n      },\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.advertisingDetails.podPosition\",\n        \"reason\": \"Missing required field\"\n      },\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.sessionID\",\n        \"reason\": \"Unexpected error. Hint: InvalidApiSidLength=63\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/bitrateChange": {
      "post": {
        "description": "Sent when the bitrage changes",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "qoeDataDetails",
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.bitrateChange"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.bitrateChange\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 30,\n                    \"qoeDataDetails\": {\n                        \"framesPerSecond\": 1,\n                        \"bitrate\": 35000,\n                        \"droppedFrames\": 30,\n                        \"timeToStart\": 1364\n                    }\n                },\n                \"timestamp\": \"2022-03-04T13:38:40+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.qoeDataDetails\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/bufferStart": {
      "post": {
        "description": "Sent when buffering starts. Note: Because there is no bufferResume event type, it is inferred when you send a play event after bufferStart.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.bufferStart"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.bufferStart\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/chapterComplete": {
      "post": {
        "description": "Signals the completion of a chapter",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.chapterComplete"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.chapterComplete\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/chapterSkip": {
      "post": {
        "description": "Signals a chapter skip",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.chapterSkip"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.chapterSkip\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/chapterStart": {
      "post": {
        "description": "Signals the start of a chapter segment",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "chapterDetails": {
                                  "type": "object",
                                  "properties": {
                                    "offset": {
                                      "type": "integer",
                                      "description": "The offset of the chapter inside the content (in seconds) from the start"
                                    },
                                    "length": {
                                      "type": "integer",
                                      "description": "The length of the chapter, in seconds"
                                    },
                                    "index": {
                                      "type": "integer",
                                      "description": "The position (index, integer) of the chapter inside the content"
                                    },
                                    "friendlyName": {
                                      "type": "string",
                                      "description": "The name of the chapter and/or segment"
                                    }
                                  },
                                  "required": [
                                    "index",
                                    "length",
                                    "offset"
                                  ]
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "customMetadata": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      }
                                    }
                                  }
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "chapterDetails",
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.chapterStart"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.chapterStart\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 10,\n                    \"chapterDetails\": {\n                        \"friendlyName\": \"Chapter 1\",\n                        \"length\": 10,\n                        \"index\": 1,\n                        \"offset\": 0\n                    }\n                },\n                \"timestamp\": \"2022-03-04T13:37:56+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.chapterDetails.index\",\n        \"reason\": \"Missing required field\"\n      },\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.chapterDetails.length\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/error": {
      "post": {
        "description": "Signals that an error has occurred",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "errorDetails": {
                                  "type": "object",
                                  "properties": {
                                    "name": {
                                      "type": "string"
                                    },
                                    "source": {
                                      "type": "string",
                                      "enum": [
                                        "player",
                                        "external"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "name",
                                    "source"
                                  ]
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "errorDetails",
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.error"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.error\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 35,\n                    \"qoeDataDetails\": {\n                        \"bitrate\": 35000,\n                        \"droppedFrames\": 30\n                    },\n                    \"errorDetails\": {\n                        \"name\": \"test-buffer-start\",\n                        \"source\": \"player\"\n                    }\n                },\n                \"timestamp\": \"2022-03-04T13:39:15+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.errorDetails.name\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/pauseStart": {
      "post": {
        "description": "Sent when the user presses Pause. Because there is no resume event type, it is inferred when you send a play event after a pauseStart.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.pauseStart"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.pauseStart\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ping": {
      "post": {
        "description": "Use the Ping request during main content playback in cases when content must be sent every 10 seconds, regardless of other API events that have been sent. The first ping event should fire 10 seconds after main content playback has begun. For ad content, it must be sent every 1 second during ad tracking.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.ping"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.ping\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/play": {
      "post": {
        "description": "Sent when the player changes state to "playing" from another state, such as when the on ('Playing') callback is triggered by the player. Other states from which the player moves to "playing" include "buffering", when the user resumes from "paused", when the player recovers from an error, and during autoplay."
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.play"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.play\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/sessionComplete": {
      "post": {
        "description": "Sent when the end of the main content is reached",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.sessionComplete"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.sessionComplete\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/sessionEnd": {
      "post": {
        "description": "Notifies the Media Analytics backend to immediately close the session when the user has abandoned their viewing of the content and they are unlikely to return. If you don't send a sessionEnd, an abandoned session will time-out normally (after no events are received for 10 minutes, or when no playhead movement occurs for 30 minutes), and the session is deleted by the backend.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.sessionEnd"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.sessionEnd\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"5c32e1a6ef6b58be5136ba8db2f79f1d251d3121a898bc8fb60123b8fdb9aa1c\",\n                    \"playhead\": 25\n                },\n                \"timestamp\": \"2022-03-04T13:39:00+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection.playhead\",\n        \"reason\": \"Missing required field\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/sessionStart": {
      "post": {
        "description": "Signals the the start of a new session. When the response returns, the \"sessionId\" must be extracted and sent for all subsequent event calls to the Edge API server.",
        "parameters": [
          {
            "name": "configId",
            "description": "The datastream id",
            "in": "query",
            "schema": {
              "type": "string"
            },
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "sessionDetails": {
                                  "type": "object",
                                  "properties": {
                                    "adLoad": {
                                      "type": "string"
                                    },
                                    "appVersion": {
                                      "type": "string",
                                      "description": "The SDK version used by the player. This could have any custom value that makes sense for your player"
                                    },
                                    "artist": {
                                      "type": "string"
                                    },
                                    "rating": {
                                      "type": "string",
                                      "description": "Rating as defined by TV Parental Guidelines"
                                    },
                                    "show": {
                                      "type": "string",
                                      "description": "Program/Series Name. Program Name is required only if the show is part of a series."
                                    },
                                    "channel": {
                                      "type": "string",
                                      "description": "Distribution Station/Channels or where the content is played. Any string value is accepted here"
                                    },
                                    "episode": {
                                      "type": "string",
                                      "description": "The number of the episode"
                                    },
                                    "originator": {
                                      "type": "string",
                                      "description": "Creator of the content"
                                    },
                                    "firstAirDate": {
                                      "type": "string",
                                      "description": "The date when the content first aired on television. Any date format is acceptable, but Adobe recommends: YYYY-MM-DD"
                                    },
                                    "streamType": {
                                      "type": "string",
                                      "enum": [
                                        "audio",
                                        "video"
                                      ],
                                      "description": "Identifies the stream type"
                                    },
                                    "authorized": {
                                      "type": "string",
                                      "description": "The user has been authorized via Adobe authentication"
                                    },
                                    "hasResume": {
                                      "type": "boolean"
                                    },
                                    "streamFormat": {
                                      "type": "string",
                                      "description": "Format of the stream (HD, SD)"
                                    },
                                    "station": {
                                      "type": "string",
                                      "description": "Name / ID of the radio station"
                                    },
                                    "genre": {
                                      "type": "string",
                                      "description": "Type or grouping of content as defined by content producer. Values should be comma delimited in variable implementation. In reporting, the list eVar will split each value into a line item, with each line item receiving equal metrics weight"
                                    },
                                    "season": {
                                      "type": "string",
                                      "description": "The season number the show belongs to. Season Series is required only if the show is part of a series"
                                    },
                                    "showType": {
                                      "type": "string"
                                    },
                                    "contentType": {
                                      "type": "string",
                                      "description": "Available values per Stream Type: Audio - "song", "podcast", "audiobook", "radio"; Video: "VoD", "Live", "Linear", "UGC", "DVoD" Customers can provide custom values for this parameter"
                                    },
                                    "friendlyName": {
                                      "type": "string",
                                      "description": "This is the "friendly" (human-readable) name of the content"
                                    },
                                    "playerName": {
                                      "type": "string",
                                      "description": "Name of the player"
                                    },
                                    "author": {
                                      "type": "string",
                                      "description": "Name of the author (of an audiobook)"
                                    },
                                    "album": {
                                      "type": "string"
                                    },
                                    "length": {
                                      "type": "integer",
                                      "description": "Clip Length/Runtime - This is the maximum length (or duration) of the content being consumed (in seconds)"
                                    },
                                    "dayPart": {
                                      "type": "string",
                                      "description": "A property that defines the time of the day when the content was broadcast or played. This could have any value set as necessary by customers"
                                    },
                                    "label": {
                                      "type": "string",
                                      "description": "Name of the record label"
                                    },
                                    "mvpd": {
                                      "type": "string",
                                      "description": "MVPD provided via Adobe authentication."
                                    },
                                    "feed": {
                                      "type": "string",
                                      "description": "Type of feed"
                                    },
                                    "assetID": {
                                      "type": "string",
                                      "description": "This is the unique identifier for the content of the media asset, such as the TV series episode identifier, movie asset identifier, or live event identifier. Typically these IDs are derived from metadata authorities such as EIDR, TMS/Gracenote, or Rovi. These identifiers can also be from other proprietary or in-house systems."
                                    },
                                    "name": {
                                      "type": "string",
                                      "description": "Content ID of the content, which can be used to tie back to other industry / CMS IDs"
                                    },
                                    "publisher": {
                                      "type": "string",
                                      "description": "Name of the audio content publisher"
                                    },
                                    "firstDigitalDate": {
                                      "type": "string",
                                      "description": "The date when the content first aired on any digital channel or platform. Any date format is acceptable but Adobe recommends: YYYY-MM-DD"
                                    },
                                    "network": {
                                      "type": "string",
                                      "description": "The network/channel name"
                                    },
                                    "isDownloaded": {
                                      "type": "boolean",
                                      "description": "Set to true when the hit is generated due to playing a downloaded content media session. Not present when downloaded content is not played."
                                    }
                                  },
                                  "required": [
                                    "name",
                                    "playerName",
                                    "length",
                                    "channel",
                                    "contentType"
                                  ]
                                },
                                "customMetadata": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      }
                                    }
                                  }
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionDetails"
                              ]
                            },
                            "implementationDetails": {
                              "type": "object",
                              "properties": {
                                "version": {
                                  "type": "string"
                                }
                              }
                            },
                            "identityMap": {
                              "type": "object",
                              "properties": {
                                "FPID": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string"
                                      },
                                      "authenticatedState": {
                                        "type": "string",
                                        "default": "ambiguous",
                                        "enum": [
                                          "ambiguous",
                                          "authenticated",
                                          "loggedOut"
                                        ]
                                      },
                                      "primary": {
                                        "type": "boolean"
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.sessionStart"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n  \"events\": [\n    {\n      \"xdm\": {\n        \"mediaCollection\": {\n          \"sessionDetails\": {\n            \"dayPart\": \"dayPart\",\n            \"mvpd\": \"test-mvpd\",\n            \"authorized\": \"true\",\n            \"label\": \"test-label\",\n            \"station\": \"test-station\",\n            \"publisher\": \"test-media-publisher\",\n            \"author\": \"test-author\",\n            \"name\": \"Friends\",\n            \"friendlyName\": \"FriendlyName\",\n            \"assetID\": \"/uri-reference\",\n            \"originator\": \"David Crane and Marta Kauffman\",\n            \"episode\": \"4933\",\n            \"genre\": \"Comedy\",\n            \"rating\": \"4.8/5\",\n            \"season\": \"1521\",\n            \"show\": \"Friends Series\",\n            \"length\": 100,\n            \"firstDigitalDate\": \"releaseDate\",\n            \"artist\": \"test-artist\",\n            \"hasResume\": false,\n            \"album\": \"test-album\",\n            \"firstAirDate\": \"firstAirDate\",\n            \"showType\": \"sitcom\",\n            \"streamFormat\": \"streamFormat\",\n            \"streamType\": \"video\",\n            \"adLoad\": \"adLoadType\",\n            \"channel\": \"broadcastChannel\",\n            \"contentType\": \"VOD\",\n            \"playerName\": \"HTML5 player\",\n            \"appVersion\": \"sdk-1.0\",\n            \"feed\": \"sourceFeed\",\n            \"network\": \"test-network\"\n          },\n          \"playhead\": 0,\n          \"implementationDetails\": {\n            \"version\": \"libraryVersion\"\n          },\n          \"customMetadata\": [\n            {\n              \"name\": \"myCustomValue3\",\n              \"value\": \"c3\"\n            },\n            {\n              \"name\": \"myCustomValue2\",\n              \"value\": \"c2\"\n            },\n            {\n              \"name\": \"myCustomValue1\",\n              \"value\": \"c1\"\n            }\n          ]\n        },\n        \"timestamp\": \"2023-04-04T11:35:16Z\",\n        \"identityMap\": {\n          \"FPID\": [\n            {\n              \"id\": \"CHANGEME\",\n              \"authenticatedState\": \"ambiguous\",\n              \"primary\": true\n            }\n          ]\n        },\n        \"eventType\": \"media.sessionStart\"\n      }\n    }\n  ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "requestId": {
                      "type": "string",
                      "description": "The request ID."
                    },
                    "handle": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "payload": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "sessionId": {
                                  "type": "string",
                                  "description": "The session ID generated for the media session that must be added for all subsequent calls of the same session"
                                }
                              }
                            }
                          },
                          "type": {
                            "type": "string"
                          },
                          "eventIndex": {
                            "type": "integer",
                            "format": "int32"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n    \"requestId\": \"dd850e05-8c3e-4ae4-9ea8-506490978004\",\n    \"handle\": [\n        {\n            \"payload\": [\n                {\n                    \"sessionId\": \"bfba9a5f2986d69a9a9424f6a99702562512eb244f2b65c4f1c1553e7fe9997f\"\n                }\n            ],\n            \"type\": \"media-analytics:new-session\",\n            \"eventIndex\": 0\n        },\n        {\n            \"payload\": [\n                {\n                    \"scope\": \"Target\",\n                    \"hint\": \"34\",\n                    \"ttlSeconds\": 1800\n                },\n                {\n                    \"scope\": \"AAM\",\n                    \"hint\": \"7\",\n                    \"ttlSeconds\": 1800\n                },\n                {\n                    \"scope\": \"EdgeNetwork\",\n                    \"hint\": \"va6\",\n                    \"ttlSeconds\": 1800\n                }\n            ],\n            \"type\": \"locationHint:result\"\n        },\n        {\n            \"payload\": [\n                {\n                    \"key\": \"kndctr_EA0C49475E8AE1870A494023_AdobeOrg_cluster\",\n                    \"value\": \"va6\",\n                    \"maxAge\": 1800\n                },\n                {\n                    \"key\": \"kndctr_EA0C49475E8AE1870A494023_AdobeOrg_identity\",\n                    \"value\": \"CiY0Mzg5NTEyNzMzNTUxMDc5MzgzMzU2MjU5NDY5MTY3Mzc3MTc2OFIOCJ-YppX6MBgBKgNWQTbwAZ-YppX6MA==\",\n                    \"maxAge\": 34128000\n                }\n            ],\n            \"type\": \"state:store\"\n        }\n    ]\n}"
                  }
                }
              }
            }
          },
          "207": {
            "description": "Multi-Status",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "requestId": {
                      "type": "string",
                      "description": "The request ID."
                    },
                    "handle": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "payload": {
                            "type": "array",
                            "items": {
                              "type": "object"
                            }
                          },
                          "type": {
                            "type": "string"
                          },
                          "eventIndex": {
                            "type": "integer",
                            "format": "int32"
                          }
                        }
                      }
                    },
                    "errors": {
                      "type": "array",
                      "description": "Errors generated by the upstreams configured for the datastream",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "string"
                          },
                          "status": {
                            "type": "integer"
                          },
                          "title": {
                            "type": "string"
                          },
                          "report": {
                            "type": "object",
                            "properties": {
                              "eventIndex": {
                                "type": "integer",
                                "format": "int32"
                              },
                              "report": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "name": {
                                      "type": "string",
                                      "description": "Field that contains the error"
                                    },
                                    "reason": {
                                      "type": "string",
                                      "description": "Error for that specific field"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\",\n    \"handle\": [\n        {\n            \"payload\": [\n                {\n                    \"scope\": \"Target\",\n                    \"hint\": \"34\",\n                    \"ttlSeconds\": 1800\n                },\n                {\n                    \"scope\": \"AAM\",\n                    \"hint\": \"7\",\n                    \"ttlSeconds\": 1800\n                },\n                {\n                    \"scope\": \"EdgeNetwork\",\n                    \"hint\": \"va6\",\n                    \"ttlSeconds\": 1800\n                }\n            ],\n            \"type\": \"locationHint:result\"\n        },\n        {\n            \"payload\": [\n                {\n                    \"key\": \"kndctr_EA0C49475E8AE1870A494023_AdobeOrg_cluster\",\n                    \"value\": \"va6\",\n                    \"maxAge\": 1800\n                },\n                {\n                    \"key\": \"kndctr_EA0C49475E8AE1870A494023_AdobeOrg_identity\",\n                    \"value\": \"CiY0Mzg5NTEyNzMzNTUxMDc5MzgzMzU2MjU5NDY5MTY3Mzc3MTc2OFIOCI-qtpf6MBgBKgNWQTbwAY-qtpf6MA==\",\n                    \"maxAge\": 34128000\n                }\n            ],\n            \"type\": \"state:store\"\n        }\n    ],\n    \"errors\": [\n        {\n            \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n            \"status\": 400,\n            \"title\": \"Invalid request\",\n            \"report\": {\n                \"eventIndex\": 0,\n                \"details\": [\n                    {\n                        \"name\": \"$.xdm.mediaCollection.sessionDetails.name\",\n                        \"reason\": \"Missing required field\"\n                    }\n                ]\n            }\n        }\n    ]\n}"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/EXEG-0003-400\",\n  \"status\": 400,\n  \"title\": \"Invalid datastream ID\",\n  \"detail\": \"The datastream ID '66b64400-e418-4184-8fed-b57636d09' referenced in your request does not exist. Update the request with a valid datastream ID and try again.\",\n  \"report\": {\n    \"requestId\": \"75af7733-9c8a-45a9-b2a1-bb570c58a0da\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/statesUpdate": {
      "post": {
        "description": "Signals that one or multiple states are started and/or ended",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "events": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "xdm": {
                          "type": "object",
                          "properties": {
                            "mediaCollection": {
                              "type": "object",
                              "properties": {
                                "playhead": {
                                  "type": "integer"
                                },
                                "statesStart": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string",
                                        "pattern": "^[a-zA-Z0-9_.]{1,64}$"
                                      }
                                    },
                                    "required": [
                                      "name"
                                    ]
                                  }
                                },
                                "statesEnd": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "name": {
                                        "type": "string",
                                        "pattern": "^[a-zA-Z0-9_.]{1,64}$"
                                      }
                                    },
                                    "required": [
                                      "name"
                                    ]
                                  }
                                },
                                "sessionID": {
                                  "type": "string",
                                  "description": "The sessionID generated on sessionStart"
                                },
                                "qoeDataDetails": {
                                  "type": "object",
                                  "properties": {
                                    "bitrate": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "droppedFrames": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "framesPerSecond": {
                                      "type": "integer",
                                      "format": "int32"
                                    },
                                    "timeToStart": {
                                      "type": "integer",
                                      "format": "int32"
                                    }
                                  }
                                }
                              },
                              "required": [
                                "playhead",
                                "sessionID"
                              ]
                            },
                            "eventType": {
                              "type": "string",
                              "default": "media.statesUpdate"
                            },
                            "timestamp": {
                              "type": "string",
                              "format": "date-time"
                            }
                          },
                          "required": [
                            "mediaCollection",
                            "timestamp",
                            "eventType"
                          ]
                        }
                      },
                      "required": [
                        "xdm"
                      ]
                    }
                  }
                }
              },
              "examples": {
                "0": {
                  "value": "{\n    \"events\": [\n        {\n            \"xdm\": {\n                \"eventType\": \"media.statesUpdate\",\n                \"mediaCollection\": {\n                    \"sessionID\": \"bfba9a5f2986d69a9a9424f6a99702562512eb244f2b65c4f1c1553e7fe9997f\",\n                    \"playhead\": 60,\n                    \"statesStart\": [\n                        {\n                            \"name\": \"mute\"\n                        },\n                        {\n                            \"name\": \"pictureInPicture\"\n                        }\n                    ],\n                    \"statesEnd\": [\n                        {\n                            \"name\": \"fullScreen\"\n                        }\n                    ]\n                },\n                \"timestamp\": \"2022-03-04T13:40:40+00:00\"\n            }\n        }\n    ]\n}"
                }
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "No content"
          },
          "400": {
            "description": "Bad request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 400
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string",
                      "description": "Error that caused the 400 status"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string",
                                "description": "Field that contains the error"
                              },
                              "reason": {
                                "type": "string",
                                "description": "Error for that specific field"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0400-400\",\n  \"status\": 400,\n  \"title\": \"Bad Request\",\n  \"detail\": \"Invalid request. Please check your input and try again.\",\n  \"report\": {\n    \"details\": [\n      {\n        \"name\": \"$.events[0].xdm.mediaCollection\",\n        \"reason\": \"Unexpected error. Hint: Empty statesUpdate event. At least one of statesStart or statesEnd list should be non-empty\"\n      }\n    ],\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string"
                    },
                    "status": {
                      "type": "integer",
                      "default": 404
                    },
                    "title": {
                      "type": "string"
                    },
                    "detail": {
                      "type": "string"
                    },
                    "report": {
                      "type": "object",
                      "properties": {
                        "requestId": {
                          "type": "string"
                        },
                        "details": {
                          "type": "string",
                          "description": "Error that caused the 404 status"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "0": {
                    "value": "{\n  \"type\": \"https://ns.adobe.com/aep/errors/va-edge-0404-404\",\n  \"status\": 404,\n  \"title\": \"Not Found\",\n  \"detail\": \"The requested resource could not be found but may be available again in the future.\",\n  \"report\": {\n    \"details\": \"Error processing request. If the session is longer than 24h, please start a new one. Returning Not Found\",\n    \"requestId\": \"e3d87437-5054-4bc2-8953-be4be8d0b900\"\n  }\n}"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```