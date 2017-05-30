var prompt = "chaosbot-website > ";

$("#term").terminal({
    help: function() {
        this.echo("There can be no help without order.");
    },
    eval: function() {
        this.echo(eval(arguments.join(" ")));
    },
    gitter: function() {
        this.echo("<a href='https://gitter.im/chaosthebot/Lobby'>Click here</a> to join the Gitter chat.");
    },
}, {
    enabled: false,
    onBlur: (term) => hideTerminal(),
    prompt: (callback) => callback(prompt)
});

function showTerminal() {
    $("#term-modal").addClass("is-active");
    S("#term").enable();
}

function hideTerminal() {
    $("#term-modal").addClass("is-active");
    S("#term").disable();
}
