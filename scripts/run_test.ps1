$cred = gcloud auth application-default print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }

Invoke-WebRequest `
  -Method POST `
  -Headers $headers `
  -ContentType: "application/json; charset=utf-8" `
  -InFile C:\Private_Projekte\hack_product_search\BaselHack_Product_Search\scripts\test_picture.json `
  -Uri "https://vision.googleapis.com/v1/images:annotate" | Select-Object -Expand Content