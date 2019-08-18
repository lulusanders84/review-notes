import decodeBase64 from "./decodeBase64";

export default function(pdfUrl) {
    return fetch("https://v2.convertapi.com/convert/pdf/to/txt?Secret=495hXVaLqLtZ5jQN", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "Parameters": [
                {
                    "Name": "File",
                    "FileValue": {
                        "Url": pdfUrl
                    }
                },
                {
                    "Name": "WebHook",
                    "Value": pdfUrl
                }
            ]
        })
    }).then(res => {
        return res.json();
    }).then(res => {
        return decodeBase64(res.Files[0].FileData);
    })
}