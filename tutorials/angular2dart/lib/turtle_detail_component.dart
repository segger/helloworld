import 'dart:async';
import 'dart:html';

import 'package:angular2/core.dart';
import 'package:angular2/router.dart';

import 'turtle.dart';
import 'turtle_service.dart';

@Component(
  selector: 'my-turtle-detail',
  templateUrl: 'turtle_detail_component.html',
  styleUrls: const [
    'turtle_detail_component.css'
  ]
)

class TurtleDetailComponent implements OnInit {
  @Input()
  Turtle turtle;

  final TurtleService _turtleService;
  final RouteParams _routeParams;

  TurtleDetailComponent(this._turtleService, this._routeParams);

  Future<Null> ngOnInit() async {
    var color = _routeParams.get('color');
    if (color != null) turtle = await (_turtleService.getTurtle(color));
  }

  void goBack() {
    window.history.back();
  }
}
