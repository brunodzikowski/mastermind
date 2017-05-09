var http = require( "http" )
var fs = require( "fs" );

var server = http.createServer( function ( request, response ) {
    switch ( request.method ) {
        case "GET":
            if ( request.url == "/" ) {
                fs.readFile( "static/index.html", function ( error, data ) {
                    if ( error ) {
                        response.writeHead( 404, { 'Content-Type': 'text/html' } );
                        response.write( "<h1>błąd 404 - nie ma pliku!<h1>" );
                        response.end();
                    }

                    else {
                        response.writeHead( 200, { 'Content-Type': 'text/html' } );
                        response.write( data );
                        response.end();
                    }
                } );
            }
            else if ( request.url != "/" ) {
                //checking file format
                var tempArray = request.url.split( "." );
                var format = tempArray[tempArray.length - 1];

                //according to format we choose correct type
                var type = "";
                switch ( format ) {
                    case "css":
                        type = 'text/css';
                        break;
                    case "js":
                        type = 'application/javascript';
                        break;
                    default:
                        type = 'text/html';
                        break;
                }

                //reading correct file
                fs.readFile( "static" + request.url, function ( error, data ) {
                    if ( error ) {
                        response.writeHead( 404, { 'Content-Type': 'text/html' } );
                        response.write( "<h1>błąd 404 - nie ma pliku!<h1>" );
                        response.end();
                    }

                    else {
                        response.writeHead( 200, { 'Content-Type': type } );
                        response.write( data );
                        response.end();
                    }
                } );
            }
    }
} )

server.listen( 3000 );
console.log( "Serwer dziala" );