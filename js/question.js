$(function(){
  let marriage_value = 0;
  let kindergarten_value = 0;
  let elementary_school_value = 0;
  let junia_high_shcool_value = 0;
  let high_shcool_value = 0;
  let university_value = 0;
  let car_value = 0;
  let pet_value = 0;

  $(".yn_btn , .h_btn").on("click", function() {
       $(this).closest(".quesition_part").css("display","none");
        const block_id = $(this).closest(".quesition_part").attr('id');
        const shift_id = $(this).attr("href");
        $(shift_id).addClass("positionFit").show("fast");

       if(block_id == 'q_00'){
          marriage_value = Number($(this).attr('data-value'));
           $('#answer_00').text($(this).text());
       }
       else if(block_id == 'q_02'){
           kindergarten_value = Number($(this).attr('data-value'));
           $('#answer_02').text($(this).text());
       }
       else if(block_id == 'q_03'){
           elementary_school_value = Number($(this).attr('data-value'));
           $('#answer_03').text($(this).text());
       }
       else if(block_id == 'q_04'){
           junia_high_shcool_value = Number($(this).attr('data-value'));
           $('#answer_04').text($(this).text());
       }
       else if(block_id == 'q_05'){
           high_shcool_value = Number($(this).attr('data-value'));
           $('#answer_05').text($(this).text());
       }
       else if(block_id == 'q_06'){
           university_value = Number($(this).attr('data-value'));
           $('#answer_06').text($(this).text());
       }
       else if(block_id == 'q_07'){
           car_value = Number($(this).attr('data-value'));
           $('#answer_07').text($(this).text());
       }
       else if(block_id == 'q_08'){
           $('#answer_08').text($(this).text());
           pet_value = Number($(this).attr('data-value'));
           const children_count = Number( $('#children_count').val() );
           let total_price = children_count*
                 ( kindergarten_value
             + elementary_school_value
             + junia_high_shcool_value
             + high_shcool_value
             + university_value )
             + marriage_value
             + car_value
             + pet_value;
           const formatter = new Intl.NumberFormat('ja-JP', {
             style: 'currency',
             currency: 'JPY'
           });
           total_price = formatter.format(total_price);
           $('#answer_09').text(total_price);
           $('#answer_01').text(children_count + '人');
       }
  });
});
