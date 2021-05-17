# Caesar cipher CLI tool

With this tool, you will be able to encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

## How to run

You should download the code and install all dependencies. After that, you will be able to run the application.

**Options:**

This tool accepts 4 options:

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

**Usage:**

To convert one text to another you should type the following in the terminal (you have to be in the project directory):

```bash
$ node my_caesar_cli -a encode -s 3 -i "./some-input.txt" -o "./some-output.txt"
```

You can provide the arguments in any order.

**shift** and **action** options are mandatory, you can't omit them.

**Extra examples:**

1. _-a (--action)_ is **encode**

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

```bash
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**

```bash
$ node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _Negative shift handling_

```bash
$ node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`
