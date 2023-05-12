// We will go over 10 examples to demonstrate how data can be retrieved from a MongoDB database.

// We have a collection called “customer”. The documents in the customer collection contains customer name, age, gender, and the amount of the last purchase.

// Here is a document in the customer collection:

// {
//  "_id" : ObjectId("600c1806289947de938c68ea"),
//  "name" : "John",
//  "age" : 32,
//  "gender" : "male",
//  "amount" : 32
// }
// The document is displayed in JSON format.

// Example 1
// Query documents that belong to a specific customer.

// We use the find method to query documents from a MongoDB database. If used without any arguments or collections, find method retrieves all documents.

// We want to see the document belongs to customer John so the name field needs to be specified in the find method.

// > db.customer.find( {name: "John"} )
// { "_id" : ObjectId("600c1806289947de938c68ea"), "name" : "John", "age" : 32, "gender" : "male", "amount" : 32 }
// We can attach pretty method to make the document seem more appealing.

// > db.customer.find( {name: "John"} ).pretty()
// {
//  "_id" : ObjectId("600c1806289947de938c68ea"),
//  "name" : "John",
//  "age" : 32,
//  "gender" : "male",
//  "amount" : 32
// }
// It is easier to read now.

// Example 2
// Query documents that belong to customers older than 40.

// The condition is applied to age field using a logical operator. The “$gt” stands for “greater than” and is used as follows.

// > db.customer.find( {age: {$gt:40}} ).pretty()
// {
//  "_id" : ObjectId("600c19d2289947de938c68ee"),
//  "name" : "Jenny",
//  "age" : 42,
//  "gender" : "female",
//  "amount" : 36
// }
// Example 3
// Query documents that belong to female customers who are younger than 25.

// This example is like a combination of the previous two examples. Both conditions must be met so we use “and” logic to combine the conditions. It can be done by writing both conditions separated by comma.

// > db.customer.find( {gender: "female", age: {$lt:25}} ).pretty()
// {
//  "_id" : ObjectId("600c19d2289947de938c68f0"),
//  "name" : "Samantha",
//  "age" : 21,
//  "gender" : "female",
//  "amount" : 41
// }
// {
//  "_id" : ObjectId("600c19d2289947de938c68f1"),
//  "name" : "Laura",
//  "age" : 24,
//  "gender" : "female",
//  "amount" : 51
// }
// The “$lt” stands for “less than”.

// Example 4
// In this example, we will repeat the previous example in a different way. Multiple conditions can also be combined with “and” logic as below.

// > db.customer.find( {$and :[ {gender: "female", age: {$lt:25}} ]} ).pretty()
// The logic used for combining the conditions is indicated at the beginning. The remaining part is same as the previous example but we need to put the conditions in a list ( [ ] ).

// Example 5
// Query customers who are either male or younger than 25.

// This example requires a compound query with “or” logic. We just need to change “$and” to “$or”.

// > db.customer.find( { $or: [ {gender: "male"}, {age: {$lt: 22}} ] })
// { "_id" : ObjectId("600c1806289947de938c68ea"), "name" : "John", "age" : 32, "gender" : "male", "amount" : 32 }
// { "_id" : ObjectId("600c19d2289947de938c68ed"), "name" : "Martin", "age" : 28, "gender" : "male", "amount" : 49 }
// { "_id" : ObjectId("600c19d2289947de938c68ef"), "name" : "Mike", "age" : 29, "gender" : "male", "amount" : 22 }
// { "_id" : ObjectId("600c19d2289947de938c68f0"), "name" : "Samantha", "age" : 21, "gender" : "female", "amount" : 41 }
// Example 6
// MongoDB allows for aggregating values while retrieving from the database. For instance, we can calculate the total purchase amount for males and females. The aggregate method is used instead of the find method.

// > db.customer.aggregate([
// ... { $group: {_id: "$gender", total: {$sum: "$amount"} } }
// ... ])
// { "_id" : "female", "total" : 198 }
// { "_id" : "male", "total" : 103 }
// Let’s elaborate on the syntax. We first group the documents by the gender column by selecting “$gender” as id. The next part specifies both the aggregation function which is “$sum” in our case and the column to be aggregated.

// If you are familiar with Pandas, the syntax is quite similar to the group by function.

// Example 7
// Let’s take the previous example one step further and add a condition. Thus, we first select documents that “match” a condition and apply aggregation.

// The following query is an aggregation pipeline which first selects the customers who are older than 25 and calculates the average purchase amount for males and females.

// > db.customer.aggregate([
// ... { $match: { age: {$gt:25} } },
// ... { $group: { _id: "$gender", avg: {$avg: "$amount"} } }
// ... ])
// { "_id" : "female", "avg" : 35.33 }
// { "_id" : "male", "avg" : 34.33 }

// Example 8
// The query in the previous example contains only two groups so it is not necessary to sort the results. However, we might have queries that return several values. In such cases, sorting the results is a good practice.

// We can sort the results of the previous query by the average amount in ascending order.

// > db.customer.aggregate([
// ... { $match: { age: {$gt:25} } },
// ... { $group: { _id: "$gender", avg: {$avg: "$amount"} } },
// ... { $sort: {avg: 1} }
// ... ])
// { "_id" : "male", "avg" : 34.33 }
// { "_id" : "female", "avg" : 35.33 }
// We have just added “$sort” in the aggregation pipeline. The field used for sorting is specified along with the sorting behavior. 1 means in ascending order and -1 means in descending order.

