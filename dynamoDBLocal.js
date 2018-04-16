//-----------------------------------------------------------------------------------------USER
var params = {
    TableName: 'user',
    KeySchema: [
        {
            AttributeName: 'email',
            KeyType: 'HASH'
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'email',
            AttributeType: 'S'
        }
    ],
    ProvisionedThroughput:  {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
};
console.log("Creating the table");
dynamodb.createTable(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});

//-----------------------------------------------------------------------------------------RESTAURANT
var params = {
    TableName: 'restaurant',
    KeySchema: [
        {
            AttributeName: 'id',
            KeyType: 'HASH'
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'N'
        }
    ],
    ProvisionedThroughput:  {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
};
console.log("Creating the table");
dynamodb.createTable(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});

//-----------------------------------------------------------------------------------------INSERT DATA
var params = {
    TableName: 'user',
    Item: {
        email: 'bandrade@ioet.com',
        password: '$2a$10$TRr74WeXaDkyAzVu4b9QFuFcgecUsBRea16LbmcQbAIklvPXdrDgu',
        role: 'registered_user'
    }
};
console.log("Put item");
ppJson(params);
docClient.put(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else console.log("PutItem returned successfully");
});

//-----------------------------------------------------------------------------------------INSERT DATA
var params = {
    TableName: 'user',
    Item: {
        email: 'dsalazar@ioet.com',
        password: '$2a$10$jNLY0g6CSJfHbAEzxqofZuhwsLQ00tPEWz4CcMjViK1nuuINYVFDe',
        role: 'super_admin'
    }
};
console.log("Put item");
ppJson(params);
docClient.put(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else console.log("PutItem returned successfully");
});

//-----------------------------------------------------------------------------------------INSERT DATA
var params = {
    TableName: 'restaurant',
    Item: {
        id: '3',
        location: 'Bar de mecanica',
        name: 'Como y me voy',
        score: '1'
    }
};
console.log("Put item");
ppJson(params);
docClient.put(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else console.log("PutItem returned successfully");
});

var params = {
    TableName: 'restaurant',
    Item: {
        id: '2',
        location: 'Diagonal a Fiec vieja',
        name: 'Comedor Coca Cola',
        score: '3'
    }
};
console.log("Put item");
ppJson(params);
docClient.put(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else console.log("PutItem returned successfully");
});

var params = {
    TableName: 'restaurant',
    Item: {
      id: '4',
      location: 'Frente a Fiec Vieja',
      name: 'Pasteles el chino',
      score: '4'
    }
};
console.log("Put item");
ppJson(params);
docClient.put(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else console.log("PutItem returned successfully");
});
