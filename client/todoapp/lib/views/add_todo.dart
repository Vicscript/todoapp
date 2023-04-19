import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todoapp/provider/todo_provider.dart';

final titleController = TextEditingController();
final descriptionController = TextEditingController();
addDatawidget(BuildContext context) {
  return showModalBottomSheet(
      context: context,
      builder: (context) {
        return Container(
          height: 300.0,
          width: 400.0,
          child: Column(
            children: [
              TextField(
                controller: titleController,
                decoration: InputDecoration(hintText: 'Add title'),
              ),
              TextField(
                controller: descriptionController,
                decoration: InputDecoration(hintText: 'Add description'),
              ),
              ElevatedButton(
                onPressed: () {
                  if (titleController.text.isNotEmpty) {
                    Provider.of<TodoProvider>(context, listen: false).addData({
                      "title": titleController.text,
                      "description": descriptionController.text
                    });
                  }
                },
                // ignore: prefer_const_constructors
                child: Text("Submit"),
              ),
            ],
          ),
        );
      });
}

updateDataWidget(BuildContext context, String id) {
  return showModalBottomSheet(
      context: context,
      builder: (context) {
        return Container(
          height: 300.0,
          width: 400.0,
          child: Column(
            children: [
              TextField(
                controller: titleController,
                decoration: InputDecoration(hintText: 'Add title'),
              ),
              TextField(
                controller: descriptionController,
                decoration: InputDecoration(hintText: 'Add description'),
              ),
              ElevatedButton(
                onPressed: () {
                  if (titleController.text.isNotEmpty) {
                    Provider.of<TodoProvider>(context, listen: false)
                        .updateData({
                      "id": id,
                      "title": titleController.text,
                      "description": descriptionController.text
                    });
                  }
                },
                // ignore: prefer_const_constructors
                child: Text("Update Data"),
              ),
            ],
          ),
        );
      });
}
