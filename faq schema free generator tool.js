   $(".copyfaqhtml").click(function () {
            $(".faqhtml").select();
            document.execCommand('copy');
        });

        $(".add-question").bind("click", function () {
            $('.divTest').empty();
            var div = $("<div />");
            div.html(GetDynamicTextBox(""));
            $(".insider").append(div);
        });

        function GetDynamicTextBox(value) {
            return '<div class="question-input-wrapper">' +
                '<div class="question-input faqQuestion1">' +
                '<span class="remove-question" data-toggle="tooltip" data-placement="left" data-original-title="Remove question">' +
                '<i class="fa fa-times" aria-hidden="true"></i>' +
                '</span>' +
                '<textarea  placeholder="Question" class="faq-question" cols="1" rows="1"></textarea> ' +
                '<textarea placeholder="Answer" class="faq-answer" cols="2" rows="2"></textarea>' +
                '</div>' +
                '</div>';
        }

        $("body").on("click", ".remove-question", function () {
            $('.schema-faq-code').empty();
            $(this).closest(".question-input-wrapper").remove();
        });

        $('.update-code').click(function () {
            $('.schema-faq-code').empty();
            $(".question-input-wrapper").each(function () {
                var div = $(this);
                var question = div.find('.faq-question');
                var answer = div.find('.faq-answer');

                $(question).on('input', function (e) {
                    $('.schema-faq-code').empty();
                });

                $(answer).on('input', function (e) {
                    $('.schema-faq-code').empty();
                });

                var divt = $('.schema-faq-code');

                divt.append(
                    "\n" +
                    "    " + '<div  itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question">' + "\n" +
                    "    " + "    " + '<h3 itemprop="name" class="faq-q">' + question.val() + '</h3>' + "\n" +
                    "    " + "    " + '<div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">' + "\n" +
                    "    " + "    " + "    " + ' <p itemprop="text" class="faq-a">' + answer.val() + '</p>' + "\n" +
                    "    " + "    " + '</div>' + "\n" +
                    "    " + '</div>' + "\n"
                );

                $('.faqhtml').val($('.divFather').html());

            });
        });

        $('#updateCode').click(function () {
            $('.schema-faq-code').empty();
        });

        // Create the outer div
        var divFather = document.createElement('div');
        divFather.className = 'divFather';
        divFather.style.display = 'none';

        // Create the inner schema-faq-code div
        var schemaFaqCode = document.createElement('div');
        schemaFaqCode.className = 'schema-faq-code';
        schemaFaqCode.setAttribute('itemscope', '');
        schemaFaqCode.setAttribute('itemtype', 'https://schema.org/FAQPage');

        // Append the inner div to the outer div
        divFather.appendChild(schemaFaqCode);

        // Add the divFather to your desired container element
        var containerElement = document.querySelector('.faqhtml'); // Replace with your actual selector
        containerElement.appendChild(divFather);
