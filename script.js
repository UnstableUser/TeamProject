<script>
         function show_hide(element)
         {
            var myAnswer = element.nextElementSibling;

            var displaySetting = myAnswer.style.display;

            var quizButton = element;

            if(displaySetting=="inline-block"){
                myAnswer.style.display = 'none';

                quizButton.innerHTML = 'Show Answer';
            }
            else
            {
                myAnswer.style.display = 'inline-block';
                quizButton.innerHTML = 'Hide Answer';
            }
         }
</script>