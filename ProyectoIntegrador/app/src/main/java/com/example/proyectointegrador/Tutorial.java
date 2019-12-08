package com.example.proyectointegrador;

import android.content.Intent;
import android.graphics.drawable.AnimationDrawable;
import android.os.Bundle;
import android.support.constraint.ConstraintLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.text.Html;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

@SuppressWarnings("ALL")
public class Tutorial extends AppCompatActivity {

    private ViewPager mSliderViewPager;
    private LinearLayout mDotsLayout;

    private TextView[] mDots;

    private SliderAdapter sliderAdapter;

    private Button btnNext,btnPrev;
    private int mCurrentPage;

    RelativeLayout principal;
    AnimationDrawable animationPrincipal;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_tutorial );

        principal = (RelativeLayout) findViewById( R.id.principal0 );
        animationPrincipal = (AnimationDrawable) principal.getBackground();
        animationPrincipal.setEnterFadeDuration( 2000 );
        animationPrincipal.setExitFadeDuration( 4000 );
        animationPrincipal.start();



        btnNext = (Button )  findViewById( R.id.next );
        btnPrev = (Button )  findViewById( R.id.prev );

        mSliderViewPager = (ViewPager) findViewById( R.id.sliderView );
        mDotsLayout = (LinearLayout) findViewById( R.id.puntos );

        sliderAdapter = new SliderAdapter( this );

        mSliderViewPager.setAdapter( sliderAdapter );
        addDotsIndictor(0);

        mSliderViewPager.addOnPageChangeListener( viewListener );

        btnNext.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                mSliderViewPager.setCurrentItem( mCurrentPage + 1 );


                if (btnNext.getText().equals( "Finalizar" )){
                    Intent menu = new Intent(getApplicationContext(),MainActivity.class);
                    startActivity(menu);

                }

            }
        } );

        btnPrev.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mSliderViewPager.setCurrentItem( mCurrentPage - 1 );
            }
        } );


    }

    public void addDotsIndictor(int position){

        mDots = new TextView[3];
        mDotsLayout.removeAllViews();

        for (int i = 0; i < mDots.length; i++) {

            mDots[i] = new TextView( this );
            mDots[i].setText( Html.fromHtml("&#8226;") );
            mDots[i].setTextSize( 35 );
            mDots[i].setTextColor( getResources().getColor( R.color.colorTransparentWhite ) );

            mDotsLayout.addView( mDots[i] );

        }


        if (mDots.length > 0){
            mDots[position].setTextColor( getResources().getColor( R.color.colorWhite ) );
        }


    }

    ViewPager.OnPageChangeListener viewListener = new ViewPager.OnPageChangeListener() {
        @Override
        public void onPageScrolled(int i, float v, int i1) {

        }

        @Override
        public void onPageSelected(int i) {

            addDotsIndictor(i);
            mCurrentPage = i;

            if (i == 0){

                btnNext.setEnabled( true );
                btnPrev.setEnabled( false );
                btnPrev.setVisibility( View.INVISIBLE );

                btnNext.setText( "Siguiente" );
                btnPrev.setText( "" );

            }else if (i == mDots.length-1){

                btnNext.setEnabled( true );
                btnPrev.setEnabled( true );
                btnPrev.setVisibility( View.VISIBLE );

                btnNext.setText( "Finalizar" );
                btnPrev.setText( "Atras" );

            }else {

                btnNext.setEnabled( true );
                btnPrev.setEnabled( true );
                btnPrev.setVisibility( View.VISIBLE );

                btnNext.setText( "Siguiente" );
                btnPrev.setText( "Atras" );

            }

        }

        @Override
        public void onPageScrollStateChanged(int i) {

        }
    };


}
