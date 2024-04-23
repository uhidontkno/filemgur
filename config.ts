export default {
    webserver: {port:8080},
    policy: {
        "upload_limit": "8G",
        "file_extension_regex": / *.* /,
        "auth": {
            "used": false,
            "policy_regex": /^(?=.*[0-9]).{8,}$/,
            "kv_id": process.env.KV_ID
        }
    }
}