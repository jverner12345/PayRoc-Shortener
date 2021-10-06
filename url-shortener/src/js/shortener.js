export default function shortenerFunctions(){

    function checkUrl(string) {
        let url;        
        try {
          url = new URL(string);
        } catch (_) {
          return false;  
        }      
        return url.protocol === "http:" || url.protocol === "https:";
      }

    return{
        checkUrl:checkUrl
    }
}