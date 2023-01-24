import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class TodoProvider extends ChangeNotifier {
  final httpClient = http.Client();
 late  List<dynamic> todoData;

  //GetRequest
  Future fetchData() async {
    final Uri restAPIURL =
        Uri.parse("https://todoflutternodejs.herokuapp.com/");

    http.Response response = await httpClient.get(restAPIURL);

    final Map parsedData = await json.decode(response.body.toString());
    todoData = parsedData['data'];
    print(todoData);
  }
}
