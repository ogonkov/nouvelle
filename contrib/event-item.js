module.exports = function(nunjucks) {
    return function EventItem() {
        this.tags = ['eventitem'];

        this.parse = function(parser, nodes, lexer) {
            var tok = parser.nextToken();

            var args = parser.parseSignature(null, true);
            parser.advanceAfterBlockEnd(tok.value);

            var body = parser.parseUntilBlocks('endeventitem');
            parser.advanceAfterBlockEnd();

            return new nodes.CallExtension(this, 'run', args, [body]);
        };

        this.run = function(context, args, body) {
            return new nunjucks.runtime.SafeString(
                `<li>
                    <time>${args.start}</time>
                    <div id="${args.id}">
                        ${body()}

                        <p>
                            <a href="#${args.speakerSlug}">${args.speaker}</a>
                        </p>
                    </div>
                </li>`
            );
        };
    };
};
