---
title: "Chai Addict Takes on the Cloud"
date: 2024-04-28T00:00:00+00:00
hero: /images/posts/writing-posts/analytics.svg
description: Implementing visitor counter on website using dynamoDB
theme: Toha
menu:
  sidebar:
    name: Chai Addict Takes on the Cloud
    identifier: chai-Addict
    weight: 500
---
A month ago, I found myself leisurely scrolling through YouTube shorts with a cup of chai in hand (I'm addicted to chai), when suddenly, a video about a cloud challenge popped up. 

Despite my mixed feelings about challenges, I decided to take part in it. The challenge consisted of 15 parts.

The first five were a breeze, but then the <span style="color:red">nightmare</span> began. 

The initial task was to complete an AWS certificate. Fortunately, my college offers free AWS certificates. Well, technically, it's not free since I've already invested over 70k in college with little knowledge in return, but hey, no one's asking about my unemployment situation, right?

It took me a whole month to complete **two certificates**. There was a lot of learning involved, along with a bit of practical knowledge. I delved into EC2 instances, which are essentially computers running in the cloud. 


**My biggest fear? Sacrificing my precious chai to run an instance ☹.**


{{< img src="/posts/shortcodes/crying.jpg"  height="400" width="700"  title="A guy crying over a tea" >}}

Completing the certificate was surprisingly the easiest part. 

Next up was writing a resume using HTML. Luckily, I had developed a sudden interest in creating websites around two years ago, so I was quite adept with HTML. Adding some CSS was akin to adding malai to chai

With the resume done, I decided to venture into creating my own website. I attempted to find a free domain but came up empty-handed.
 Consequently, I decided to purchase my own domain. Everything seemed to be going smoothly, and I crossed my fingers, hoping nothing would go wrong (<span style="color:red">spolier</span>: it did ☹). Now, I needed to host my website. 

The challenge required me to use an S3 bucket to host a static website. While I could have used Amplify, I felt the need to understand how this bucket worked and what DNS was all about. Little did I know that hosting could cost a pretty penny. I opted for www.rishabhportfolio.com and rishabhportfolio.com, assuming Route53 would only charge me once, but I was mistaken. I was slapped with a charge of 0.50 for one and another 0.50 for the other (a total of $1 ☹). 

Aws is like a <span style = "color:orange">fire</span>. It literally is, it burns your <span style="color:green">money</span> like it’s a piece of paper.

I also added an SSL certificate using CloudFront because I don't want my users to see this.

{{< img src="/posts/shortcodes/SSL.jpg"  height="400" width="700"  title="A guy crying over a tea" >}}

With the website hosting sorted, I embarked on building my website. I deployed it on Hugo, only to realize that my S3 free tier had been exhausted (I was charged 0.50$). I hate AWS ☹. 

The subsequent task involved adding a visitor counter to the site. This part was particularly difficult. 

To implement the visitor counter, I opted for DynamoDB as my database, appreciating its serverless nature (I also hate working with databases).
 API Gateway played a crucial role in centralizing the project. Additionally, I created a Lambda function to fetch data from DynamoDB and increment views whenever someone visited the site. It took weeks to iron out all the kinks. I immersed myself in learning Boto3 and JavaScript, mastering the art of communication with DynamoDB.


 {{< img src="/posts/shortcodes/lamda.jpg"  height="500" width="700"  title="lamda code" >}}

Crafting such a short code consumed two entire days. Now, I find myself incrementing views whenever a visitor lands on my website. But there's a catch—I had to grant Lambda permission to modify DynamoDB, necessitating a crash course in IAM permissions on AWS. With everything set up, I needed to call the Lambda function from my website. JavaScript and API Gateway came to the rescue, facilitating this process.

 {{< img src="/posts/shortcodes/javaPic.jpg"  height="500" width="700"  title="Javascript code" >}}

In essence, the code fetches data from the API and utilizes it to modify the text. After rigorous testing and numerous error fixes, my website is finally up and running smoothly.

 However, there's one lingering issue—it takes considerable time to implement changes. Perhaps in the future, I'll endeavor to streamline this process. But for now, I'll take a well-deserved break, sipping my chai and celebrating my efforts.

