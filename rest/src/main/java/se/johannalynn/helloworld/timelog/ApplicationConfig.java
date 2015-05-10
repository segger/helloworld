package se.johannalynn.helloworld.timelog;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("timelog")
public class ApplicationConfig extends Application {
  
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new HashSet<Class<?>>();
        resources.add(TimelogResource.class);
        return resources;
    }
}
