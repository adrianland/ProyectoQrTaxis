package com.example.proyectointegrador;

import android.app.Activity;
import android.content.Intent;
import android.graphics.drawable.AnimationDrawable;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;

public class MainActivity extends AppCompatActivity {

    ConstraintLayout principal;
    AnimationDrawable animationPrincipal;
    private Button scan_btn,perfil;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_main );


        principal = (ConstraintLayout) findViewById( R.id.principal );

        animationPrincipal = (AnimationDrawable) principal.getBackground();
        animationPrincipal.setEnterFadeDuration( 2000 );
        animationPrincipal.setExitFadeDuration( 4000 );
        animationPrincipal.start();

        scan_btn = (Button) findViewById(R.id.escaner);
        perfil = (Button) findViewById(R.id.perfil);
        final Activity activity = this;
        scan_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                IntentIntegrator integrator = new IntentIntegrator(activity);
                integrator.setDesiredBarcodeFormats(IntentIntegrator.QR_CODE_TYPES);
                integrator.setPrompt("Escáner");
                integrator.setCameraId(0);
                integrator.setBeepEnabled(false);
                integrator.setBarcodeImageEnabled(false);
                integrator.initiateScan();
            }
        });

        perfil.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent perfil = new Intent(getApplicationContext(),Perfil.class);
                startActivity(perfil);
            }
        } );
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
        if(result != null){
            if(result.getContents()==null){
                Toast.makeText(this, "Has cancelado la operacion", Toast.LENGTH_LONG).show();
            }
            else {
                Parametros.QR =  result.getContents();
               // Parametros.QR =  result.getContents();
                Toast.makeText(this, Parametros.QR,Toast.LENGTH_LONG).show();
                //System.out.println( "Este es el codigo "+Parametros.QR );

                Intent perfil = new Intent(getApplicationContext(),Perfil.class);
                startActivity(perfil);

            }
        }
        else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }

}
