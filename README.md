# PlaceTool
位置情報から近隣の施設を取得したりするGraphQL

## cURLで操作

### Tokenを取得
```
# curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:4000/ \
    --data  \
        '{"query":"mutation Login($input: LoginUserInput!) {login(input: $input) {token}}", "variables":{"input":{"email":"admin@user.local","paassword":"password12345"}}}'
```


### 住所から経緯緯度を取得
```
curl --request POST \
    --header 'Authorization: { TOKEN }' \
    --header 'content-type: application/json' \
    --url http://localhost:4000/ \
    --data '{"query":"query Query($address: String!) {  latLngByAddress(address: $address) {lat lng}}","variables":{"address":"東京都墨田区押上１丁目１−２"}}'
```