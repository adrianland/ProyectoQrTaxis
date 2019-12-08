package com.example.proyectointegrador;

import android.content.DialogInterface;
import android.graphics.drawable.AnimationDrawable;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.InputType;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Adapter;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class Perfil extends AppCompatActivity {

    LinearLayout principal;
    AnimationDrawable animationPrincipal;
    List<Datos> empleado;
    TextView nombre;
    TextView placa;
    TextView cedula;
    TextView celular;
    TextView vueltas;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_perfil );
        nombre = (TextView) findViewById( R.id.nombre );
        placa  = (TextView) findViewById( R.id.placa );
        celular  = (TextView) findViewById( R.id.celular );
        cedula  = (TextView) findViewById( R.id.cedula );
        vueltas  = (TextView) findViewById( R.id.vueltas );

        principal = (LinearLayout) findViewById( R.id.principal2 );

        animationPrincipal = (AnimationDrawable) principal.getBackground();
        animationPrincipal.setEnterFadeDuration( 2000 );
        animationPrincipal.setExitFadeDuration( 4000 );
        animationPrincipal.start();

        loadEmpleados();
    }


    private void loadEmpleados() {


       final String URL_CONDUCTOR = "http://"+Ip.ip+"/Reactjs/serviciosjs/taxis/listarPerfil.php?codigo="+Parametros.QR;
        //final String URL_CONDUCTOR = "http://"+Ip.ip+"/Reactjs/serviciosjs/taxis/listarPerfil.php?codigo="+44;

        System.out.println("----<"+URL_CONDUCTOR);
        StringRequest stringRequest = new StringRequest(Request.Method.GET, URL_CONDUCTOR,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            //converting the string to json array object
                            JSONArray array = new JSONArray(response);
                            ImageView foto = (ImageView ) findViewById( R.id.foto );

                            //traversing through all the object
                            for (int i = 0; i < array.length(); i++) {

                                JSONObject Datos = array.getJSONObject(i);

                                nombre.setText( Datos.getString( "nombre")+" "+ Datos.getString( "apellido") );
                                placa.setText( ""+ Datos.getString( "placa") );
                                celular.setText( ""+ Datos.getString( "celular") );
                                cedula.setText( "CC "+ Datos.getString( "documento") );
                                vueltas.setText( ""+ Datos.getString( "viajes"));


                                Picasso.get()
                                        .load("http://"+Ip.ip+"/Reactjs/serviciosjs/fotostaxis/"+Datos.getString( "foto" ))
                                        .error(R.mipmap.ic_launcher)
                                        .fit()
                                        .centerInside()
                                        .into(foto);


                                /*Picasso.get()
                                        .load("http://"+Ip.ip+"/Reactjs/serviciosjs/fotostaxis/"+Datos.getString( "foto" ))
                                        .into(foto);*/


                                Parametros.ID= Datos.getInt( "id"  );

                                System.out.println( array.length() );
                              /*  empleado.add(new Datos(
                                        Datos.getInt("id"),
                                        Datos.getString("nombre"),
                                        Datos.getString("apellido"),
                                        Datos.getString("documento"),
                                        Datos.getString("celular"),
                                        Datos.getString("foto"),
                                        Datos.getString("viajes")
                                ));*/


                            }
                            //creating adapter object and setting it to recyclerview
                            //  Adapter adapter = new Adapter(Perfil.this, empleado);
                            //recyclerView.setAdapter(adapter);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {

                    }
                });

        Volley.newRequestQueue(this).add(stringRequest);
    }


    public void comentario(View v){

        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("Ingresa un comentario");

        final EditText input = new EditText(this);

        input.setInputType( InputType.TYPE_CLASS_TEXT);
        Parametros.Comentario=input.getText().toString();
        builder.setView(input);

        builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {


                Parametros.Comentario = input.getText().toString();

                Registrar registro = new Registrar();
                registro.registrar( Perfil.this );
                registro.start();

            }
        });
        builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.cancel();
            }
        });

        builder.show();

    }

/*
    @Override
    public void onBackPressed() {
        super.onBackPressed();
        this.finish();
    }
*/

}
