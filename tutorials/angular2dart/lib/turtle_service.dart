import 'dart:async';

import 'package:angular2/core.dart';

import 'turtle.dart';
import 'mock_turtles.dart';

@Injectable()
class TurtleService {
  Future<List<Turtle>> getTurtles() async => mockTurtles;

  Future<Turtle> getTurtle(color) async =>
    (await getTurtles()).firstWhere((turtle) => turtle.color == color);
}
