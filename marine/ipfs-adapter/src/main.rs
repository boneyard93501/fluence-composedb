/*
 * Copyright 2021 Fluence Labs Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 use serde_json::Value;

#![allow(improper_ctypes)]

use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::MountedBinaryResult;
use marine_rs_sdk::WasmLoggerBuilder;

module_manifest!();


fn main() {
    WasmLoggerBuilder::new().build().unwrap();
}


#[marine]
pub fn ipfs_dag_put(data_object: Value) -> MountedBinaryResult {

    // 

    // --store-codec      string - Codec that the stored object will be encoded
    // with. Default: dag-cbor.
    // --input-codec      string - Codec that the input object is encoded in.
    //     Default: dag-json.

    // value to stdin? 

    let args = vec!(
        "dag".to_owned(),
        "put".to_owned(),
        data_object.as_bytes()
    );


    let response = curl_request(args);
    response
}

// mounted_binaries are available to import like this:
// #[marine]
// #[link(wasm_import_module = "host")]
// extern "C" {
//     pub fn ipfs(cmd: Vec<String>) -> MountedBinaryResult;
// }

#[marine]
#[link(wasm_import_module = "curl_adapter")]
extern "C" {
    pub fn curl_request(args: Vec<String>) -> MountedBinaryResult;
}
