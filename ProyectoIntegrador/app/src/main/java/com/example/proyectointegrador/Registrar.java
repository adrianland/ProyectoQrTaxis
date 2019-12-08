package com.example.proyectointegrador;

import android.content.Intent;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import android.widget.RatingBar;


public class Registrar extends Thread{

    Perfil InterfazPerfil;
    String registro_URL ="http://"+Ip.ip+"/Reactjs/serviciosjs/taxis/Registrar.php";
    static SimpleDateFormat fechas = new SimpleDateFormat("dd-MM-yyyy");
    public static String fecha;





    public void registrar( Perfil perfil){
          InterfazPerfil = perfil;
      }


      public void run(){
         // System.out.println( "Aqui estoy dentro del run" );
          final RatingBar simpleRatingBar = (RatingBar) InterfazPerfil.findViewById(R.id.estrellas);


          String totalStars = "Total Stars:: " + simpleRatingBar.getNumStars();
         // Toast.makeText(InterfazPerfil, totalStars + "\n" + rating, Toast.LENGTH_LONG).show();
          System.out.println( "Total Stars:: " + simpleRatingBar.getNumStars()+" Rating :: " + simpleRatingBar.getRating() );




          InterfazPerfil.runOnUiThread( new Runnable() {
              @Override
              public void run() {
                 // System.out.println( registro_URL );

                  final String rating = ""+simpleRatingBar.getRating();
               System.out.println( "esto es lo que debe ser : "+rating );


                  Calendar calendar = Calendar.getInstance();
                  calendar.getTime();
                  fecha = fechas.format( calendar.getTime() );


                  StringRequest stringRequest = new StringRequest( Request.Method.POST, registro_URL,
                          new Response.Listener<String>() {
                              @Override
                              public void onResponse(String s) {

                              }
                          }
                          , new Response.ErrorListener() {
                      @Override
                      public void onErrorResponse(VolleyError volleyError) {

                      }
                  } ){

                      protected Map<String,String> getParams() throws AuthFailureError{
                         Map<String,String> Params = new HashMap<String, String>();
                          Params.put( "conductor", Parametros.QR );
                          Params.put( "viajes", String.valueOf(1));
                          Params.put( "puntuacion", rating );
                          Params.put( "comentario", Parametros.Comentario );
                          Params.put( "fecha", fecha );
                          return Params;
                      }

                  };

                  VolleySingleton.getIntanciaVolley( InterfazPerfil ).addToRequestQueue( stringRequest );

                 Toast.makeText(InterfazPerfil, "Valoracion registrada con exito", Toast.LENGTH_SHORT).show();
                  Intent Main = new Intent( InterfazPerfil.getApplicationContext(), com.example.proyectointegrador.MainActivity.class);
                  InterfazPerfil.startActivity(Main);



              }
          } );

      }



}
