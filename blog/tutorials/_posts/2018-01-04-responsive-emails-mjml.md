---
header: 'Building responsive emails with MJML.'
date: 2018-01-04 09:00:00 +0000
author:
    - name: Dan Mountford
    - img: dan-thumb.jpg
img: mjml.svg

# First paragraph for post description
context: If any of you, like myself, have designed and developed bespoke responsive emails on a regular basis you’ll understand the difficulties in trying to get an engaging, aesthetically pleasing responsive email to render correctly in every major email client, including those pesky legacy email clients – yes we’re all looking at you Outlook, you pile of 💩 .

# Meta Information
title: Building Responsive Emails with MJML
description: Learn how to build pixel-perfect responsive emails with MJML.
---

{:.first}
If any of you, like myself, have designed and developed bespoke responsive emails on a regular basis you’ll understand the difficulties in trying to get an engaging, aesthetically pleasing responsive email to render correctly in every major email client, including those pesky legacy email clients – yes we’re all looking at you Outlook, you pile of 💩 .

![Introducing MJML](/assets/img/blog/blog-test-image.jpg "Introducing MJML")

Anyway, those days are (sort of) over thanks to [MJML](https://mjml.io/){:target="blank"}. Like [Foundation for Emails](https://foundation.zurb.com/emails.html){:target="blank"} by Foundation, MJML is an email templating language framework that aims to simplify the way you code responsive emails, so you can focus on producing great emails without worrying as much about email client compatibility. Personally, I prefer to use MJML over Foundation for Emails because of its simplicity.

## What Exactly is MJML?

It’s a framework that transpiles its own simple, semantic language into production-ready HTML emails. MJML is built in [React](https://reactjs.org/){:target="blank"}, and like React, utilises reusable components, which makes developing responsive email templates a breeze.

Here’s an example of a simple MJML column component containing some text:

{:.mjml}

```html
<mj-column>
	<mj-text font-size="20px" color="#F45E43" font-family="helvetica" align="center">Hello World</mj-text>
</mj-column>
```

And here's how it looks in HTML, once transpiled:

```html
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <title></title>
  <!--[if !mso]><!-- -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">
  #outlook a { padding: 0; }
  .ReadMsgBody { width: 100%; }
  .ExternalClass { width: 100%; }
  .ExternalClass * { line-height:100%; }
  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
  p { display: block; margin: 13px 0; }
</style>
<!--[if !mso]><!-->
<style type="text/css">
  @media only screen and (max-width:480px) {
    @-ms-viewport { width:320px; }
    @viewport { width:320px; }
  }
</style>
<!--<![endif]-->
<!--[if mso]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css">
  .outlook-group-fix {
    width:100% !important;
  }
</style>
<![endif]-->
<style type="text/css">
  @media only screen and (min-width:480px) {
    .mj-column-per-100 { width:100%!important; }
  }
</style>
</head>
<body>

  <div style="margin:0px auto;" data-class=""><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px 0px 0px;"><!--[if mso | IE]>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td style="vertical-align:top;width:NaNpx;">
      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0px;padding:10px 25px;" align="center"><div style="cursor:auto;color:#F45E43;font-family:helvetica;font-size:20px;line-height:22px;text-align:center;">Hello World</div></td></tr></tbody></table></div><!--[if mso | IE]>
      </td></tr></table>
      <![endif]--></td></tr></tbody></table></div>
</body>
</html>
```

As you can see, MJML syntax is simple to read, which makes it easy to learn, and it does all the hard compatibility development work for you.

MJML syntax is saved in a .mjml file, which you can transpile into HTML using MJML’s [online editor](https://mjml.io/try-it-live/){:target="blank"} or by running it locally. Although it takes a few minutes to set up, I’d recommend running MJML locally because you can then use your own code editor and enhance your workflow with task runners such as [Gulp](https://gulpjs.com/){:target="blank"}.

## 1. Getting Started with MJML

I’ll guide you through the process of creating a basic responsive email in MJML locally, which involves using using [Node JS](https://nodejs.org/en/){:target="blank"}, [npm](https://www.npmjs.com/get-npm){:target="blank"} and your terminal. Don’t worry if you haven’t used Node JS, npm or your terminal before, I’ll guide you through this process. I’m using the Mac installation, but if you’re on Windows, feel free to get in touch with me on [Twitter](https://twitter.com/Dan_Mountford?lang=en){:target="blank"} if you need some help installing Node JS, npm or MJML on Windows.

## 2. About Node JS and NPM

As you may know, Node JS is the revolutionary JavaScript runtime environment, built with Google’s [V8 engine](https://developers.google.com/v8/){:target="blank"}, that allows JavaScript to be run server-side. This means you can use Node JS to run JavaScript to carry out server-side and even local tasks to improve our development workflow. Npm, or the Node Package Manager, is used to install and manage Node JS programs, code and code dependencies such as and Gulp Babel.

If you already have Node and npm installed, hooray! Move to the next step. If you’re not sure, open your terminal and type node -v, then hit enter. If you get a version like `v8.1.3` returned, then you have Node installed. Do the same to check if you have npm installed – type npm -v into your terminal, then hit enter. If you get a version back then you also have npm installed. If you don’t have Node and npm installed, listen up.

### 2.1 Installing Node JS and npm

Installing Node JS and npm takes minutes, go to the Node JS download page [here](https://nodejs.org/en/download/current/){:target="blank"} and click macOS Installer to download. Open up the downloaded package and follow the instructions. Once finished, you should now have Node JS and npm installed – easy!

## 3. Installing and Setting up MJML

Now you’ve got Node JS and npm installed, you’re going to use them to install the MJML framework. First, you need a folder to install and setup our MJML development environment in. Create a new folder on your Desktop and call it `mjml-email`. Once your `mjml-email` folder is on your Desktop, you need to find it in your terminal so you can install MJML inside.

To do this open up your terminal, type the following and hit enter, like so:

```terminal
$ cd Desktop/mjml-email
```

Now your terminal directory should look something like this:

```terminal
Defaults-MacBook-Pro:mjml-email Dan$
```

Keep your terminal open. If you close it, make sure you’re inside your MJML folder when you reopen it before installing MJML. Now you ready to install MJML, type the following into your terminal and hit enter:

```terminal
$ npm install mjml
```

Once you’ve done that, npm will start installing some files – wait until this has finished, it shouldn’t take more than a 30 seconds. If you open up your mjml-email folder, you’ll notice that a folder called node_modules has been installed. This is the modules folder for MJML that npm has kindly installed for you. Once you’ve installed MJML, you want to initiate npm. Type the following and press enter:

```terminal
$ npm init
```

npm will now create a package.json file inside your mjml-email folder – this tells node what packages are used within this folder. Because the nodule_modules folder is fairly large, it’s not usually good practice to copy it to other place like a server or Github repo. Instead, you can place your package.json file on your server or in your repo and then run `npm install` from your terminal, which will tell npm to read your package.json file and install the correct node_modules folder.

## 4. Building an Email in MJML

Now we have our development environment, lets create an email using MJML. First, you need to create an MJML file to create our email in. For this tutorial I’m going call the file `example.mjml`. You can simple type `touch example.mjml` (if you closed your terminal, you will need to cd back into your mjml-email folder) in your terminal or open up your code editor and create a new file called `example.mjml` and save it in your mjml-email folder.

Once you have your example.mjml file, open it up in your code editor. For this tutorial, I’m going to use [this cool template](https://mjml.io/try-it-live/templates/real-estate/){:target="blank"} created by [Sven Haustein](http://svenhaustein.de/){:target="blank"}. Copy the code below and paste it into your email.mjml file:

{:.mjml}

```html
<mjml>
  <mj-head>
    <mj-title>Say hello to RealEstate</mj-title>
    <mj-font name="Alice" href="https://fonts.googleapis.com/css?family=Alice" />
    <mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
    <mj-attributes>
      <mj-all font-family="Roboto, Helvetica, Arial, sans-serif" padding="0" />
      <mj-text font-weight="400" font-size="14" color="#000000" line-height="21px" />
    </mj-attributes>
  </mj-head>

  <mj-body>
    <mj-container background-color="#EAE8E5">

      <mj-section padding="20px 0 0 0">
        <mj-column>
          <mj-image src="http://nimus.de/share/tpl-realestate/box-head.png" alt="" align="center" border="none" padding="0"></mj-image>
        </mj-column>
      </mj-section>

      <mj-section padding-top="40px" background-color="#FFFFFF">
        <mj-column width="570px">
          <mj-text align="left" padding="0 20px" color="#1D83A8" font-size="36" line-height="40px" font-family="Alice, Helvetica, Arial, sans-serif">
            Real Estate
          </mj-text>
          <mj-text align="left" padding="0 20px">
            <strong><span style="font-size: 40px;">⚊</span></strong><br /><br /></mj-text>
        </mj-column>
      </mj-section>

      <mj-section background-color="#FFFFFF">
        <mj-column width="300px">
          <mj-text align="left" padding="0 20px 30px 20px">
            <strong>Aliquam lorem ante, dapibus in hasellus viverra nulla</strong> ut metus varius laoreet. Quisque rutrum lorem dellorus. Aenean imperdiet.
          </mj-text>
        </mj-column>
        <mj-column width="260px">
          <mj-image src="http://nimus.de/share/tpl-realestate/icon-1.png" alt="" padding-bottom="30px" width="260" align="center" border="none"></mj-image>
        </mj-column>
      </mj-section>

      <mj-section background-url="http://nimus.de/share/tpl-realestate/img-1.png" vertical-align="middle" background-size="cover" padding="30px" background-repeat="no-repeat">
        <mj-column vertical-align="middle" width="60%">
          <mj-text align="center" padding="40px 30px" color="#FFFFFF" font-size="42px" line-height="48px" font-family="Alice, Helvetica, Arial, sans-serif">
            Villa Semperin
          </mj-text>
        </mj-column>
        <mj-column vertical-align="middle" width="40%" background-color="#FFFFFF">
          <mj-image src="http://nimus.de/share/tpl-realestate/box-top.png" width="220px" alt="" align="center" border="none"></mj-image>
          <mj-text align="center" padding="20px 20px 0 20px" color="#1D83A8" font-size="26" line-height="30px" font-family="Alice, Helvetica, Arial, sans-serif">
            – first offer –
          </mj-text>
          <mj-text align="center" padding="10px 20px" font-size="22" line-height="30px">340,000 $</mj-text>
          <mj-text align="center" padding="0 20px">Nascetur ridiculus mus. Donec quam felis, ultricies nec</mj-text>
          <mj-button background-color="#F44E3C" color="white" padding="20px 20px 30px 20px" border-radius="20px">
            view details
          </mj-button>
        </mj-column>
      </mj-section>


      <mj-section padding="30px" background-color="#FFFFFF">
        <mj-column width="60%">
          <mj-text align="center" padding-bottom="20px" font-size="26" line-height="30px" font-family="Alice, Helvetica, Arial, sans-serif">
            Lorem Ipsum
          </mj-text>
          <mj-text align="center" padding="0 40px">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Lorem Ipsum
          </mj-text>
          <mj-image src="http://nimus.de/share/tpl-realestate/icon-2.png" alt="" padding="30px 0 10px 0" width="50" align="center" border="none"></mj-image>
        </mj-column>
        <mj-column width="40%" background-color="#FFFFFF">
          <mj-image src="http://nimus.de/share/tpl-realestate/img-2.png" width="216px" alt="" align="center" border="none"></mj-image>
        </mj-column>
      </mj-section>

      <mj-section padding="20px" background-color="#FFFFFF">
        <mj-column width="100%">
          <mj-image src="http://nimus.de/share/tpl-realestate/symbol-1.png" alt="" width="292px" align="left" border="none"></mj-image>
        </mj-column>
      </mj-section>

      <mj-section padding="0 20px" background-color="#FFFFFF">
        <mj-column>
          <mj-text align="center" font-size="26" line-height="30px" font-family="Alice, Helvetica, Arial, sans-serif">
            Lorem Ipsum
          </mj-text>
          <mj-divider width="20px" padding="20px 0" border-width="2px" border-color="#000000" />
          <mj-text align="center" padding="0 40px">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Lorem Ipsum
          </mj-text>
          <mj-button background-color="#F44E3C" color="white" padding="20px 20px 10px 20px" border-radius="20px">
            Call to action
          </mj-button>
        </mj-column>
      </mj-section>

      <mj-section padding="20px" background-color="#FFFFFF">
        <mj-column width="100%">
          <mj-image src="http://nimus.de/share/tpl-realestate/symbol-2.png" alt="" width="213px" align="right" border="none"></mj-image>
        </mj-column>
      </mj-section>


      <mj-section padding="0 30px 30px" background-color="#FFFFFF">
        <mj-column width="55%">
          <mj-image src="http://nimus.de/share/tpl-realestate/img-3.png" width="280px" padding-bottom="20px" alt="" align="center" border="none"></mj-image>
        </mj-column>
        <mj-column width="45%" background-color="#FFFFFF">
          <mj-text align="center" padding-bottom="20px" font-size="26" line-height="30px" font-family="Alice, Helvetica, Arial, sans-serif">
            Lorem Ipsum
          </mj-text>
          <mj-text align="center" padding="0 40px">
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          </mj-text>
          <mj-image src="http://nimus.de/share/tpl-realestate/icon-3.png" alt="" padding="30px 0 10px 0" width="50" align="center" border="none"></mj-image>
        </mj-column>
      </mj-section>

      <mj-section padding="0 20px" background-color="#FFFFFF">
        <mj-column>
          <mj-text align="center" font-size="26" line-height="30px" font-family="Alice, Helvetica, Arial, sans-serif">
            Nullam dictum felis eu pede
          </mj-text>
          <mj-divider width="20px" padding="20px 0" border-width="2px" border-color="#000000" />
        </mj-column>
      </mj-section>

      <mj-section padding="0 20px 30px" background-color="#FFFFFF">
        <mj-column width="33%">
          <mj-text align="left" padding="0 15px 15px">
            <strong>Aliquam lorem ante,</strong> dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Lorem Ipsum
          </mj-text>
        </mj-column>
        <mj-column width="34%">
          <mj-text align="left" padding="0 15px 15px">
            <strong>Phasellus viverra null aliquam lorem ante</strong>, dapibus in, viverra quis, feugiat a, tellus ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Lorem Ipsum
          </mj-text>
        </mj-column>
        <mj-column width="33%">
          <mj-text align="left" padding="0 15px 15px">
            <strong>Quisque rutrum.</strong> Aenean imperdiet viverra nulla ut metus varius laoreet. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Lorem Ipsum
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-section background-url="http://nimus.de/share/tpl-realestate/img-4.png" vertical-align="middle" background-size="cover" padding="30px" background-repeat="no-repeat">
        <mj-column vertical-align="middle" width="40%" background-color="#FFFFFF">
          <mj-image src="http://nimus.de/share/tpl-realestate/box-top.png" width="220px" alt="" align="center" border="none"></mj-image>
          <mj-text align="center" padding="20px 20px 0 20px" color="#1D83A8" font-size="26" line-height="30px" font-family="Alice, Helvetica, Arial, sans-serif">
            – 2. offer –
          </mj-text>
          <mj-text align="center" padding="10px 20px" font-size="22" line-height="30px">198,700 $</mj-text>
          <mj-text align="center" padding="0 20px">Donec quam felis, ultricies Nascetur ridiculus mus.</mj-text>
          <mj-button background-color="#F44E3C" color="white" padding="20px 20px 30px 20px" border-radius="20px">
            view details
          </mj-button>
        </mj-column>
        <mj-column vertical-align="middle" width="60%">
          <mj-text align="center" padding="40px 30px" color="#FFFFFF" font-size="42px" line-height="48px" font-family="Alice, Helvetica, Arial, sans-serif">
            Window House 23
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-section padding="40px 20px" background-color="#FFFFFF">
        <mj-column width="100%">
          <mj-image src="http://nimus.de/share/tpl-realestate/icon-1.png" alt="" width="130px" align="center" border="none"></mj-image>
        </mj-column>
      </mj-section>

      <mj-section padding="10px 0 20px 0">
        <mj-column>
          <mj-text align="center" color="#9B9B9B" font-size="11px"><a href="#" style="color: #9B9B9B;">Unsubscribe</a> from this newsletter<br>Icon made by Freepik from <a href="http://www.flaticon.com" target="_blank" style="color: #9B9B9B; text-decoration: none;">www.flaticon.com</a><br>
            <a href="http://svenhaustein.de" style="color: #9B9B9B; text-decoration:none;">Made by svenhaustein.de</a>
          </mj-text>
        </mj-column>
      </mj-section>

    </mj-container>
  </mj-body>
</mjml>
```

As you can see, the MJML syntax is fairly semantic and easy to read, in comparison to a typical responsive email in html. I’m not going to go through the different MJML components in this tutorial, but do take a look at them [here](https://mjml.io/components){:target="blank"} to see the awesome customisation MJML offers out of the box (mobile menus and carousels! 😍 😍 ).

Save your example.mjml file and go back to your terminal. Now you can convert this MJML syntax into HTML.

![We 😍 mjml](/assets/img/blog/blog-test-image.jpg "less <!--[if gte mso 9]>s more <mjml-carousel>s")

## 5. Transpiling our Email into HTML

If you’ve closed your terminal, you will need to cd into your miml-email file again (step 3). Once your’e inside your miml-email file, you will need to type the following and press enter:

```terminal
$ export PATH="$PATH:./node_modules/.bin"
```

This basically tells your terminal where to look for the MJML command files. If you ever close your terminal, you will have to retype this again before using and MJML commands or your terminal won’t be able to find the files required. To avoid this issue, you can add “export PATH="$PATH:./node_modules/.bin” to your .bashrc file. This method is discussed [here](https://unix.stackexchange.com/questions/260941/add-path-to-bashrc){:target="blank"}. To find your .bashrc file, go to your Desktop, hold shift + cmd and press “H” – this will open your user root folder. Then hold shift + cmd and press “.” – this will show all your hidden files and your .bashrc should be one of them. If you still can’t find it, you can definitely find it [here](http://www.letmegooglethat.com/?q=how+to+find+bashrc+file){:target="blank"}. If you modify your .bashrc file, you need to log out and in again or type `source ~/.bashrc` into your terminal to make it effective.

Now try typing `mjml -V` into your terminal and hit enter. You should get a version returned like so:

```terminal
$ mjml -V
3.3.5
```

If you get `-bash: mjml: command not found` returned, try reinstalling MJML: Delete your node_modules folder and type `npm install mjml` into your terminal. Once you’ve done this, try repeating the previous steps.

Now you can use miml commands, you will transpile our mjml file into HTML. Open your termina, type the following and hit enter:

```terminal
$ mjml example.mjml
```

Now open up your miml-email folder and you’ll notice there’s a file called `example.html` in there. Open this file up in your browser and you’ll see that MJML has converted your example.mjml file into a responsive email. Even better, open up the example.html file in your code editor and you’ll notice that all those pesky inline styles, conditional comments and nested tables have been generated by MJML. All hail MJML,The Saviour! Now try this: Type the following into your terminal and hit enter:

```terminal
$ mjml -m example.mjml
```

This will now tell MJML to transpile a minified HTML email, ready for testing. There’s multiple commands to help you with your email development workflow built in with MJML, take a look [here](https://mjml.io/documentation/#mjml-guides){:target="blank"}. Another cool command is -w:

```terminal
$ mjml -w example.mjml
```

This tells MJML to watch your example.mjml file for changes, so when you save your file, it automatically generates your HTML. This is nice because you can work on your email in your code editor, save, and refresh your HTML file in your browser to see any changes. MJML also works really well with Gulp, which you can use to enhance your workflow further with automatic browser refreshing etc.

## Final Words

I hope this tutorial has helped you to see the good side of responsive email development. As always, I’d highly recommend testing all your emails before sending either with [Litmus](https://litmus.com/){:target="blank"} or Litmus’s free email sending tool [PutsMail](https://putsmail.com/){:target="blank"}. Enjoy your email development adventure and please share this article!
