# FullStack GraphQL

**What is GraphQL?**
> "A query language for your API"

GraphQL is a specification to query API's and provides a server-side runtime to execute those queries using a strongly typed system based on your data. Based on the data model, GraphQL can return you the data in exactly the same format as you request it in. It can be used language and framework agnostic, and connected to any database or storage engine.

## Why GraphQL?
> "A language that doesn't affect the way you think about programming, is not worth knowing." - Alan Perlis

GraphQL changed the way how data was transferred between applications in a fixed format, to a new approach to dynamically transfer data between a "frontend" and a "backend". This allowed Facebook to tackle many problems with data fetching for mobile applications, without having to create a new REST API for every application.

## The `n+1` problem
This problem describes the cascade of independent requests triggered by the lack of data in one response.