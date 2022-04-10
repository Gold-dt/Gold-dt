document.addEventListener('DOMContentLoaded', function() {

    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
        evt.preventDefault();
        checkWord();
        window.scrollTo(0, 150);
    }


    document.getElementById('terminalTextInput').focus();


    var textInputValue = document.getElementById('terminalTextInput').value.trim();


    var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;


    var clearInput = function() {
        document.getElementById('terminalTextInput').value = "";
    }


    var scrollToBottomOfResults = function() {
        var terminalResultsDiv = document.getElementById('terminalReslutsCont');
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }


    scrollToBottomOfResults();


    var addTextToResults = function(textToAdd) {
        document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
        scrollToBottomOfResults();
    }


    var postHelpList = function() {

        var helpKeyWords = [
            "- 'r/help'",
            "- 'Open' + URL (pld: open https://www.twitch.tv/gold_dt",
            "- 'Google' + szó (pld: google fejlesztés)",
            "- 'YouTube' + csatorna neve(pld: youtube Gold dt)",
            "- 'Wiki' + szó (pld: wiki teknős)",
            "- 'Time' Pontos idő",
            "- 'Date' Pontos dátum",
        ].join('<br>');
        addTextToResults(helpKeyWords);
    }

    var sajathelp = function() {
        var helpKeyWords = [
            "- 'yt'",
            "- 'discord'",
            "- 'steam'",
            "- 'twitch'",
        ].join('<br>');
        addTextToResults(helpKeyWords);
    }


    var getTimeAndDate = function(postTimeDay) {
        var timeAndDate = new Date();
        var timeHours = timeAndDate.getHours();
        var timeMinutes = timeAndDate.getMinutes();
        var dateDay = timeAndDate.getDate();
        console.log(dateDay);
        var dateMonth = timeAndDate.getMonth() + 1;
        var dateYear = timeAndDate.getFullYear();

        if (timeHours < 10) {
            timeHours = "0" + timeHours;
        }

        if (timeMinutes < 10) {
            timeMinutes = "0" + timeMinutes;
        }

        var currentTime = timeHours + ":" + timeMinutes;
        var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

        if (postTimeDay == "time") {
            addTextToResults(currentTime);
        }
        if (postTimeDay == "date") {
            addTextToResults(currentDate);
        }
    }


    var openLinkInNewWindow = function(linkToOpen) {
        window.open(linkToOpen, '_blank');
        clearInput();
    }


    var textReplies = function() {
        switch (textInputValueLowerCase) {

            case "test":
            case "testelés":
                clearInput();
                addTextToResults("Nem kell tesztelni már leteszteltem ❤");
                break;

            case "golddt":
            case "yt":
                clearInput();
                addTextToResults('Saját csatornám');
                openLinkInNewWindow('https://www.youtube.com/channel/UCl0Zxx9XwXRC07geBiW5Qig');
                break;

            case "discord":
                clearInput();
                addTextToResults('Discord server');
                openLinkInNewWindow('https://discord.gg/gT6q4nZXBS');
                break;

            case "steam":
                clearInput();
                addTextToResults('steamem');
                openLinkInNewWindow('https://steamcommunity.com/profiles/76561199078399065');
                break;

            case "twitch":
                clearInput();
                addTextToResults('Twitch csatornám');
                openLinkInNewWindow('https://www.twitch.tv/gold_dt');
                break;

            case "hello":
            case "hi":
            case "hola":
                clearInput();
                addTextToResults("Hello ha kérdésed van nyugodtan kérdezz engem discordon!");
                break;

            case "best":
            case "gold":
            case "🏆":
                clearInput();
                addTextToResults("🏆");
                break;




            case "youtube":
                clearInput();
                addTextToResults("Írd be hogy: youtube + csatorna neve(pld: youtube Gold dt).");
                break;

            case "google":
                clearInput();
                addTextToResults("Írd be hogy: google + something to search for.");
                break;

            case "wiki":
            case "wikipedia":
                clearInput();
                addTextToResults("Írd be hogy: wiki + szó (pld: wiki teknős).");
                break;
            case "open":
            case "Open":
                clearInput();
                addTextToResults("Írd be hogy: open + URL (pld: open https://www.twitch.tv/gold_dt.");
                break;

            case "time":
                clearInput();
                getTimeAndDate("time");
                break;

            case "date":
                clearInput();
                getTimeAndDate("date");
                break;

            case "help":
            case "?":
                clearInput();
                postHelpList();
                break;

            case "r/help":
                clearInput();
                sajathelp();
                break;

            default:
                clearInput();
                addTextToResults("<p><i>parancs " + "<b>" + textInputValue + "</b>" + " nem található. Írd be `<b>Help</b>` hogy lásd az összes parancsot.</i></p>");
                break;
        }
    }


    var checkWord = function() {
        textInputValue = document.getElementById('terminalTextInput').value.trim();
        textInputValueLowerCase = textInputValue.toLowerCase();

        if (textInputValue != "") {
            addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
            if (textInputValueLowerCase.substr(0, 5) == "open ") {
                openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
                addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
            } else if (textInputValueLowerCase.substr(0, 8) == "youtube ") {
                openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
                addTextToResults("<i>Megkerestem a YouTubeon" + "<b>" + textInputValue.substr(8) + "</b>" + " másik oldalt fut.</i>");
            } else if (textInputValueLowerCase.substr(0, 7) == "google ") {
                openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
                addTextToResults("<i>Megkerestem a Googleon  " + "<b>" + textInputValue.substr(7) + "</b>" + " másik oldalt fut.</i>");
            } else if (textInputValueLowerCase.substr(0, 5) == "wiki ") {
                openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
                addTextToResults("<i>Megkerestem a Wikipédián a" + "<b>" + textInputValue.substr(5) + "</b>" + " másik oldalt fut. </i>");
            } else {
                textReplies();
            }
        }
    };

});