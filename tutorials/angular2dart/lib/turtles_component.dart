import 'dart:async';

import 'package:angular2/core.dart';
import 'package:angular2/router.dart';

import 'turtle.dart';
import 'turtle_detail_component.dart';
import 'turtle_service.dart';

@Component(
    selector: 'my-turtles',
    templateUrl: 'turtles_component.html',
    styleUrls: const [
      'turtles_component.css'
    ],
    directives: const [
      TurtleDetailComponent
    ],
    providers: const []
)

class TurtlesComponent implements OnInit {
  final Router _router;
  final TurtleService _turtleService;
  List<Turtle> turtles;
  Turtle selectedTurtle;

  TurtlesComponent(this._turtleService, this._router);

  Future<Null> getTurtles() async {
    turtles = await _turtleService.getTurtles();
  }

  void ngOnInit() {
    getTurtles();
  }

  onSelect(Turtle turtle) {
    selectedTurtle = turtle;
  }

  Future<Null> goToDetail() => _router.navigate([
    'TurtleDetail',
    {'color': selectedTurtle.color}
  ]);
}
