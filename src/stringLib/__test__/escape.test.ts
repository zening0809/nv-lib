import escape from '../escape';

const testList: string[] = ['<div>123</div>', '<span class="spanStyle">123&</span>', 'zn', '']
const labelList: string[] = ['&lt;div&gt;123&lt;/div&gt;', '&lt;span class=&quot;spanStyle&quot;&gt;123&amp;&lt;/span&gt;', 'zn', '']

test('Converts the characters "&", "<", ">" in `string` to their corresponding HTML entities', (): void => {
    testList.map((item, i): void => {
        expect(escape(item)).toEqual(labelList[i]);
    })
});

