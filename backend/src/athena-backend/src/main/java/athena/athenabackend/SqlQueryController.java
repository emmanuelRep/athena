package athena.athenabackend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/query")
public class SqlQueryController {

    @PostMapping
    public ResponseEntity<?> executeQuery(@RequestBody QueryRequest queryRequest){
        //extract sql query from request
        String query = queryRequest.getQuery();

        //processing

        Object result = processQuery(query);

        //return result
        QueryResponse response = new QueryResponse();
        response.setResult(result);
        return ResponseEntity.ok(response);

        
    }

    private Object processQuery(String query){
        return null;
    }

    public static class QueryRequest {
        private String query;
        
        // Getter and setter methods
        public String getQuery(){
            return query;
        }

        public void setQuery(String query){
            this.query =  query;
        }
    }
    
    public class QueryResponse {
        private Object result;
    
        // Getter and setter methods
        public Object getRequest(){
            return result;
        }

        public void setResult(Object result){
            this.result = result;
        }
    }
    
}
