import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class TodoProvider extends ChangeNotifier {
  final httpClient = http.Client();
  List<dynamic> todoData = [];

  Map<String, String> customHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  };

  //GetRequest
  Future fetchData() async {
    final Uri restAPIURL =
        Uri.parse("https://todoflutternodejs.herokuapp.com/");

    http.Response response = await httpClient.get(restAPIURL);

    final Map parsedData = await json.decode(response.body.toString());
    todoData = parsedData['data'];
    print(todoData);
  }

  //PostRequest

  Future addData(Map<String, String> body) async {
    final Uri restApiURL =
        Uri.parse("https://todoflutternodejs.herokuapp.com/add");

    http.Response response = await httpClient.post(restApiURL,
        headers: customHeaders, body: jsonEncode(body));
//{'Content-Type': 'application/json'}
    return response.body;
  }

  //Delete Request
  Future deleteData(String id) async {
    final Uri restApiURL =
        Uri.parse("https://todoflutternodejs.herokuapp.com/delete");

    http.Response response = await httpClient
        .delete(restApiURL, headers: customHeaders, body: {"id": id});
    return response.body;
  }
}
