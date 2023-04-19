import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todoapp/provider/todo_provider.dart';
import 'package:todoapp/views/home_view.dart';

import 'views/Training/thome_dashboard.dart';
import 'views/Training/thome_login.dart';
import 'views/Training/thome_view.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      //MultiProvider(
      //child: MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Thome_DashBoard(),
    );
    //providers: [ChangeNotifierProvider(create: (_) => TodoProvider())]);
  }
}
