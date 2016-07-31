import 'dart:async';

import 'package:angular2/core.dart';
import 'package:angular2/router.dart';

import 'turtle.dart';
import 'turtle_service.dart';

@Component(
  selector: 'my-dashboard',
  templateUrl: 'dashboard_component.html',
  styleUrls: const [
    'dashboard_component.css'
  ]
)

class DashboardComponent implements OnInit {
  final Router _router;
  List<Turtle> turtles;
  final TurtleService _turtleService;

  DashboardComponent(this._turtleService, this._router);

  Future<Null> ngOnInit() async {
    turtles = (await _turtleService.getTurtles()).skip(1).take(2).toList();
  }

  Future<Null> goToDetail(color) => _router.navigate([
    'TurtleDetail',
    {'color': color}
  ]);
}
