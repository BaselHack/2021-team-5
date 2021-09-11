
$cred = gcloud auth application-default print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }

$cred
$statusCode = "f2c20d20c306c9f8"

Invoke-WebRequest `
  -Method GET `
  -Headers $headers `
  -ContentType: "application/json; charset=utf-8" `
  -Uri "https://vision.googleapis.com/v1/projects/emerald-mission-325710/locations/europe-west1/operations/$statusCode" -verbose | Select-Object -Expand Content