import 'package:angular2/core.dart';
import 'package:angular2/router.dart';

import 'turtle_service.dart';
import 'turtles_component.dart';
import 'dashboard_component.dart';
import 'turtle_detail_component.dart';

@Component(
  selector: 'my-app',
  template:
    '''
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Turtles']">Turtles</a>
    </nav>
    <router-outlet></router-outlet>
    ''',
  directives: const [
    ROUTER_DIRECTIVES
  ],
  providers: const [
    ROUTER_PROVIDERS,
    TurtleService
  ]
)

@RouteConfig(const [
  const Route(
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  ),
  const Route(
    path: '/turtles',
    name: 'Turtles',
    component: TurtlesComponent
  ),
  const Route(
    path: '/detail/:color',
    name: "TurtleDetail",
    component: TurtleDetailComponent
  )
])

class AppComponent {
  String title = 'Angular2 and Dart - Turtles';
}
