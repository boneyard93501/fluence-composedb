/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.7.7-363
 *
 */
import { FluencePeer } from '@fluencelabs/fluence';
import type { CallParams$$ } from '@fluencelabs/fluence/dist/internal/compilerSupport/v4'
import {
    callFunction$$,
    registerService$$,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v4';


// Services

export interface HippocampusSrvDef {
    glaze_did_create: (callParams: CallParams$$<null>) => { ret_code: number; stderr: string; stdout: string; } | Promise<{ ret_code: number; stderr: string; stdout: string; }>;
    glaze_did_inspect_with_key: (key: string, ceramic_url: string, callParams: CallParams$$<'key' | 'ceramic_url'>) => { ret_code: number; stderr: string; stdout: string; } | Promise<{ ret_code: number; stderr: string; stdout: string; }>;
    glaze_stream_commits: (streamId: string, ceramic_url: string, callParams: CallParams$$<'streamId' | 'ceramic_url'>) => { ret_code: number; stderr: string; stdout: string; } | Promise<{ ret_code: number; stderr: string; stdout: string; }>;
    glaze_stream_state: (streamId: string, ceramic_url: string, callParams: CallParams$$<'streamId' | 'ceramic_url'>) => { ret_code: number; stderr: string; stdout: string; } | Promise<{ ret_code: number; stderr: string; stdout: string; }>;
    glaze_tile_content: (streamId: string, ceramic_url: string, callParams: CallParams$$<'streamId' | 'ceramic_url'>) => { ret_code: number; stderr: string; stdout: string; } | Promise<{ ret_code: number; stderr: string; stdout: string; }>;
    glaze_tile_create: (did: string, ceramic_url: string, payload: string, callParams: CallParams$$<'did' | 'ceramic_url' | 'payload'>) => { ret_code: number; stderr: string; stdout: string; } | Promise<{ ret_code: number; stderr: string; stdout: string; }>;
}
export function registerHippocampusSrv(service: HippocampusSrvDef): void;
export function registerHippocampusSrv(serviceId: string, service: HippocampusSrvDef): void;
export function registerHippocampusSrv(peer: FluencePeer, service: HippocampusSrvDef): void;
export function registerHippocampusSrv(peer: FluencePeer, serviceId: string, service: HippocampusSrvDef): void;
       

export function registerHippocampusSrv(...args: any) {
    registerService$$(
        args,
        {
    "defaultServiceId" : "HippocampusSrv",
    "functions" : {
        "tag" : "labeledProduct",
        "fields" : {
            "glaze_did_create" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "nil"
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "CeramicResult",
                            "fields" : {
                                "ret_code" : {
                                    "tag" : "scalar",
                                    "name" : "i32"
                                },
                                "stderr" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "stdout" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                }
                            }
                        }
                    ]
                }
            },
            "glaze_did_inspect_with_key" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "key" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "ceramic_url" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "CeramicResult",
                            "fields" : {
                                "ret_code" : {
                                    "tag" : "scalar",
                                    "name" : "i32"
                                },
                                "stderr" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "stdout" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                }
                            }
                        }
                    ]
                }
            },
            "glaze_stream_commits" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "streamId" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "ceramic_url" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "CeramicResult",
                            "fields" : {
                                "ret_code" : {
                                    "tag" : "scalar",
                                    "name" : "i32"
                                },
                                "stderr" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "stdout" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                }
                            }
                        }
                    ]
                }
            },
            "glaze_stream_state" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "streamId" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "ceramic_url" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "CeramicResult",
                            "fields" : {
                                "ret_code" : {
                                    "tag" : "scalar",
                                    "name" : "i32"
                                },
                                "stderr" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "stdout" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                }
                            }
                        }
                    ]
                }
            },
            "glaze_tile_content" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "streamId" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "ceramic_url" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "CeramicResult",
                            "fields" : {
                                "ret_code" : {
                                    "tag" : "scalar",
                                    "name" : "i32"
                                },
                                "stderr" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "stdout" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                }
                            }
                        }
                    ]
                }
            },
            "glaze_tile_create" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "did" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "ceramic_url" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "payload" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                },
                "codomain" : {
                    "tag" : "unlabeledProduct",
                    "items" : [
                        {
                            "tag" : "struct",
                            "name" : "CeramicResult",
                            "fields" : {
                                "ret_code" : {
                                    "tag" : "scalar",
                                    "name" : "i32"
                                },
                                "stderr" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                },
                                "stdout" : {
                                    "tag" : "scalar",
                                    "name" : "string"
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
}
    );
}
      
// Functions
 
export type TileCreateResult = { ret_code: number; stderr: string; stdout: string; }
export function tileCreate(
    node: string,
    service_id: string,
    ceramic_url: string,
    seed: string,
    content: string,
    config?: {ttl?: number}
): Promise<TileCreateResult>;

export function tileCreate(
    peer: FluencePeer,
    node: string,
    service_id: string,
    ceramic_url: string,
    seed: string,
    content: string,
    config?: {ttl?: number}
): Promise<TileCreateResult>;

export function tileCreate(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                             (call %init_peer_id% ("getDataSrv" "node") [] node)
                            )
                            (call %init_peer_id% ("getDataSrv" "service_id") [] service_id)
                           )
                           (call %init_peer_id% ("getDataSrv" "ceramic_url") [] ceramic_url)
                          )
                          (call %init_peer_id% ("getDataSrv" "seed") [] seed)
                         )
                         (call %init_peer_id% ("getDataSrv" "content") [] content)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call node (service_id "glaze_tile_create") [seed ceramic_url content] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction$$(
        args,
        {
    "functionName" : "tileCreate",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                "node" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "service_id" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "ceramic_url" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "seed" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "content" : {
                    "tag" : "scalar",
                    "name" : "string"
                }
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "struct",
                    "name" : "CeramicResult",
                    "fields" : {
                        "ret_code" : {
                            "tag" : "scalar",
                            "name" : "i32"
                        },
                        "stderr" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "stdout" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                }
            ]
        }
    },
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 
export type TileContentResult = { ret_code: number; stderr: string; stdout: string; }
export function tileContent(
    node: string,
    service_id: string,
    ceramic_url: string,
    streamId: string,
    config?: {ttl?: number}
): Promise<TileContentResult>;

export function tileContent(
    peer: FluencePeer,
    node: string,
    service_id: string,
    ceramic_url: string,
    streamId: string,
    config?: {ttl?: number}
): Promise<TileContentResult>;

export function tileContent(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                            (call %init_peer_id% ("getDataSrv" "node") [] node)
                           )
                           (call %init_peer_id% ("getDataSrv" "service_id") [] service_id)
                          )
                          (call %init_peer_id% ("getDataSrv" "ceramic_url") [] ceramic_url)
                         )
                         (call %init_peer_id% ("getDataSrv" "streamId") [] streamId)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call node (service_id "glaze_tile_content") [streamId ceramic_url] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction$$(
        args,
        {
    "functionName" : "tileContent",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                "node" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "service_id" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "ceramic_url" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "streamId" : {
                    "tag" : "scalar",
                    "name" : "string"
                }
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "struct",
                    "name" : "CeramicResult",
                    "fields" : {
                        "ret_code" : {
                            "tag" : "scalar",
                            "name" : "i32"
                        },
                        "stderr" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "stdout" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                }
            ]
        }
    },
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 
export type StreamStateResult = { ret_code: number; stderr: string; stdout: string; }
export function streamState(
    node: string,
    service_id: string,
    ceramic_url: string,
    streamId: string,
    config?: {ttl?: number}
): Promise<StreamStateResult>;

export function streamState(
    peer: FluencePeer,
    node: string,
    service_id: string,
    ceramic_url: string,
    streamId: string,
    config?: {ttl?: number}
): Promise<StreamStateResult>;

export function streamState(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                            (call %init_peer_id% ("getDataSrv" "node") [] node)
                           )
                           (call %init_peer_id% ("getDataSrv" "service_id") [] service_id)
                          )
                          (call %init_peer_id% ("getDataSrv" "ceramic_url") [] ceramic_url)
                         )
                         (call %init_peer_id% ("getDataSrv" "streamId") [] streamId)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call node (service_id "glaze_stream_state") [streamId ceramic_url] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction$$(
        args,
        {
    "functionName" : "streamState",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                "node" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "service_id" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "ceramic_url" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "streamId" : {
                    "tag" : "scalar",
                    "name" : "string"
                }
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "struct",
                    "name" : "CeramicResult",
                    "fields" : {
                        "ret_code" : {
                            "tag" : "scalar",
                            "name" : "i32"
                        },
                        "stderr" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "stdout" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                }
            ]
        }
    },
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 
export type DidNewResult = { ret_code: number; stderr: string; stdout: string; }
export function didNew(
    node: string,
    service_id: string,
    config?: {ttl?: number}
): Promise<DidNewResult>;

export function didNew(
    peer: FluencePeer,
    node: string,
    service_id: string,
    config?: {ttl?: number}
): Promise<DidNewResult>;

export function didNew(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                          (call %init_peer_id% ("getDataSrv" "node") [] node)
                         )
                         (call %init_peer_id% ("getDataSrv" "service_id") [] service_id)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call node (service_id "glaze_did_create") [] answer)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [answer])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction$$(
        args,
        {
    "functionName" : "didNew",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                "node" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "service_id" : {
                    "tag" : "scalar",
                    "name" : "string"
                }
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "struct",
                    "name" : "CeramicResult",
                    "fields" : {
                        "ret_code" : {
                            "tag" : "scalar",
                            "name" : "i32"
                        },
                        "stderr" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "stdout" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                }
            ]
        }
    },
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 
export type StreamCommitsResult = { ret_code: number; stderr: string; stdout: string; }
export function streamCommits(
    node: string,
    service_id: string,
    ceramic_url: string,
    streamId: string,
    config?: {ttl?: number}
): Promise<StreamCommitsResult>;

export function streamCommits(
    peer: FluencePeer,
    node: string,
    service_id: string,
    ceramic_url: string,
    streamId: string,
    config?: {ttl?: number}
): Promise<StreamCommitsResult>;

export function streamCommits(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                            (call %init_peer_id% ("getDataSrv" "node") [] node)
                           )
                           (call %init_peer_id% ("getDataSrv" "service_id") [] service_id)
                          )
                          (call %init_peer_id% ("getDataSrv" "ceramic_url") [] ceramic_url)
                         )
                         (call %init_peer_id% ("getDataSrv" "streamId") [] streamId)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call node (service_id "glaze_stream_commits") [streamId ceramic_url] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction$$(
        args,
        {
    "functionName" : "streamCommits",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                "node" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "service_id" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "ceramic_url" : {
                    "tag" : "scalar",
                    "name" : "string"
                },
                "streamId" : {
                    "tag" : "scalar",
                    "name" : "string"
                }
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "struct",
                    "name" : "CeramicResult",
                    "fields" : {
                        "ret_code" : {
                            "tag" : "scalar",
                            "name" : "i32"
                        },
                        "stderr" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "stdout" : {
                            "tag" : "scalar",
                            "name" : "string"
                        }
                    }
                }
            ]
        }
    },
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}
