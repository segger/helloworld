package se.johannalynn.helloworld.timelog;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/")
public class TimelogResource {
  
  @GET
  public String getTimelog() {
    return "TEST";
  }
}
