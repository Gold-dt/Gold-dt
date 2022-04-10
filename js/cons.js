document.addEventListener('DOMContentLoaded', function() {

    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
        evt.preventDefault(); // Preventing the form from submitting
        checkWord(); // Do your magic and check the entered word/sentence
        window.scrollTo(0, 150);
    }

    // Get the focus to the text input to enter a word right away.
    document.getElementById('terminalTextInput').focus();

    // Getting the text from the input
    var textInputValue = document.getElementById('terminalTextInput').value.trim();

    //Getting the text from the results div
    var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;

    // Clear text input
    var clearInput = function() {
        document.getElementById('terminalTextInput').value = "";
    }

    // Scrtoll to the bottom of the results div
    var scrollToBottomOfResults = function() {
        var terminalResultsDiv = document.getElementById('terminalReslutsCont');
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }

    // Scroll to the bottom of the results
    scrollToBottomOfResults();

    // Add text to the results div
    var addTextToResults = function(textToAdd) {
        document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
        scrollToBottomOfResults();
    }

    // Getting the list of keywords for help & posting it to the screen
    var postHelpList = function() {
        // Array of all the help keywords
        var helpKeyWords = [
            "- r/help",
            "- Open + website URL to open it in the browser (ex. open discord.com)",
            "- Google + keyword to search directly in Google (ex. google web development)",
            "- YouTube + keyword to search directly in YouTube (ex. ProgrammingWithNiko)",
            "- Wiki + keyword to search directly in Wikipedia (ex. wiki numbers)",
            "- 'Time' will display the current time.",
            "- 'Date' will display the current date.",
            "- 'tech' will make you expert by watching videos",
            "* There are more keywords that you have to discover by yourself."
        ].join('<br>');
        addTextToResults(helpKeyWords);
    }

    var test = function() {
        var helpKeyWords = [
            "- yt",
            "- discord",
            "- steam",
            "- twitch",
        ].join('<br>');
        addTextToResults(helpKeyWords);
    }

    // Getting the time and date and post it depending on what you request for
    var getTimeAndDate = function(postTimeDay) {
        var timeAndDate = new Date();
        var timeHours = timeAndDate.getHours();
        var timeMinutes = timeAndDate.getMinutes();
        var dateDay = timeAndDate.getDate();
        console.log(dateDay);
        var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
        var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.

        if (timeHours < 10) { // if 1 number display 0 before it.
            timeHours = "0" + timeHours;
        }

        if (timeMinutes < 10) { // if 1 number display 0 before it.
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

    // Opening links in a new window
    var openLinkInNewWindow = function(linkToOpen) {
        window.open(linkToOpen, '_blank');
        clearInput();
    }

    // Having a specific text reply to specific strings
    var textReplies = function() {
        switch (textInputValueLowerCase) {
            // replies
            case "code":
                clearInput();
                addTextToResults("Get web elements source code at <a target='_blank' href='</a>");
                break;

            case "founder":
                clearInput();
                addTextToResults("Niko and PWN Team are the founders");
                break;

            case "i love you":
            case "love you":
            case "love":
                clearInput();
                addTextToResults("Aww! Love you too ❤");
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
                addTextToResults("Hello, I am your assistant... I am based on pure JavaScript.");
                break;

            case "what the":
            case "wtf":
                clearInput();
                addTextToResults("F***.");
                break;

            case "best":
            case "gold":
            case "🏆":
                clearInput();
                addTextToResults("🏆");
                break;



                // replies 

            case "youtube":
                clearInput();
                addTextToResults("Type youtube + something to search for.");
                break;

            case "google":
                clearInput();
                addTextToResults("Type google + something to search for.");
                break;

            case "wiki":
            case "wikipedia":
                clearInput();
                addTextToResults("Type wiki + something to search for.");
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
                test();
                break;

            default:
                clearInput();
                addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
                break;
        }
    }

    // Main function to check the entered text and assign it to the correct function
    var checkWord = function() {
        textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
        textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string

        if (textInputValue != "") { //checking if text was entered
            addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
            if (textInputValueLowerCase.substr(0, 5) == "open ") { //if the first 5 characters = open + space
                openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
                addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
            } else if (textInputValueLowerCase.substr(0, 8) == "youtube ") {
                openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
                addTextToResults("<i>I've searched on YouTube for " + "<b>" + textInputValue.substr(8) + "</b>" + " it should be opened now.</i>");
            } else if (textInputValueLowerCase.substr(0, 7) == "google ") {
                openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
                addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
            } else if (textInputValueLowerCase.substr(0, 5) == "wiki ") {
                openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
                addTextToResults("<i>I've searched on Wikipedia for " + "<b>" + textInputValue.substr(5) + "</b>" + " it should be opened now.</i>");
            } else {
                textReplies();
            }
        }
    };

});