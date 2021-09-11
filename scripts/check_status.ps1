
$cred = gcloud auth application-default print-access-token
$headers = @{ "Authorization" = "Bearer $cred" }

$statusCode = "73d447606a09e1c7"

Invoke-WebRequest `
  -Method GET `
  -Headers $headers `
  -ContentType: "application/json; charset=utf-8" `
  -Uri "https://vision.googleapis.com/v1/projects/emerald-mission-325710/locations/europe-west1/operations/$statusCode" -verbose | Select-Object -Expand Content