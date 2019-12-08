package com.example.proyectointegrador;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v4.view.PagerAdapter;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

public class SliderAdapter extends PagerAdapter {

    Context context;
    LayoutInflater layoutInflater;

    public SliderAdapter(Context context){

        this.context = context;

    }

    public int[] slide_imagenes ={
            R.drawable.welcome,
            R.drawable.qr,
            R.drawable.estrella

     };

    public String[] slide_titulos = {
        "Welcome",
        "Lector QR",
        "Valoración"
    };

    public String[] slide_descripcion = {
            "Te damos nuestra cordial bienvenida , esperamos que nos puedas ayudar a mejor nuestros servicios",
            "Escanea el código qr de tu conductor para ver su perfil",
            "Ayudanos a mejorar la experiencia de usuario dandonos tu valoracion y opinion del viaje"
    };

    @Override
    public int getCount() {
        return slide_titulos.length;
    }

    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object o) {
        return view == (RelativeLayout) o;
    }


    @Override
    public Object instantiateItem( ViewGroup container, int position) {

        layoutInflater = (LayoutInflater) context.getSystemService( context.LAYOUT_INFLATER_SERVICE );
        View view = ( View ) layoutInflater.inflate( R.layout.slide_layout,container,false );

        ImageView slideImageView = (ImageView) view.findViewById( R.id.slide_imagen );
        TextView slideTitulo = (TextView) view.findViewById( R.id.slide_titulo );
        TextView slideDescripcion = (TextView) view.findViewById( R.id.slide_desc );

        slideImageView.setImageResource( slide_imagenes[position] );
        slideTitulo.setText(slide_titulos[position]);
        slideDescripcion.setText( slide_descripcion[position] );

        container.addView( view );
        return view;

    }

    @Override
    public void destroyItem(ViewGroup container, int position, @NonNull Object object) {

        container.removeView( (RelativeLayout)object );

    }
}
