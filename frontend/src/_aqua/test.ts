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

export interface AServiceDef {
    afunc: (aKey: string, callParams: CallParams$$<'aKey'>) => { aKey: string; } | Promise<{ aKey: string; }>;
}
export function registerAService(service: AServiceDef): void;
export function registerAService(serviceId: string, service: AServiceDef): void;
export function registerAService(peer: FluencePeer, service: AServiceDef): void;
export function registerAService(peer: FluencePeer, serviceId: string, service: AServiceDef): void;
       

export function registerAService(...args: any) {
    registerService$$(
        args,
        {
    "defaultServiceId" : "ase",
    "functions" : {
        "tag" : "labeledProduct",
        "fields" : {
            "afunc" : {
                "tag" : "arrow",
                "domain" : {
                    "tag" : "labeledProduct",
                    "fields" : {
                        "aKey" : {
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
                            "name" : "AProduct",
                            "fields" : {
                                "aKey" : {
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
 
export type TestResult = { aKey: string; }
export function test(
    config?: {ttl?: number}
): Promise<TestResult>;

export function test(
    peer: FluencePeer,
    config?: {ttl?: number}
): Promise<TestResult>;

export function test(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                       (new $ap
                        (seq
                         (seq
                          (call -relay- ("op" "noop") [])
                          (xor
                           (seq
                            (call "12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e" ("ane" "afunc") ["hi"] $ap)
                            (call -relay- ("op" "noop") [])
                           )
                           (seq
                            (call -relay- ("op" "noop") [])
                            (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                           )
                          )
                         )
                         (canon %init_peer_id% $ap  #ap-fix)
                        )
                       )
                      )
                      (xor
                       (seq
                        (ap #ap-fix.$.[0]! ap-fix_flatten)
                        (call %init_peer_id% ("callbackSrv" "response") [ap-fix_flatten])
                       )
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction$$(
        args,
        {
    "functionName" : "test",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "struct",
                    "name" : "AProduct",
                    "fields" : {
                        "aKey" : {
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
