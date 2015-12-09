# Contributing to Reach

The following is a set of guidelines for contributing to Reach.


#### Table Of Contents

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  
[Styleguides](#styleguides)
* [Git Commit Messages](#git-commit-messages)

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Reach. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.
                                                                   
Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). If you'd like, you can use [this template](#template-for-submitting-bug-reports) to structure the information.

#### Before Submitting A Bug Report

* **Check the console logs and use the [debug version](https://raw.githubusercontent.com/webcom-components/reach/master/dist/reach-debug.js).** You might be able to find the cause of the problem and fix things yourself. Most importantly, check if you can reproduce the problem in the latest version of Reach.
* **Perform a [search](https://github.com/webcom-components/reach/issues)** to see if the problem has already been reported. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue on the repository and provide the following information.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started Atom, e.g. which command exactly you used in the terminal, or how you started Atom otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or an Atom command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of Reach) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of Reach?** What's the most recent version in which the problem doesn't happen? You can download older versions of Reach using npm.
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

* **Which version of Reach are you using?** You can get the exact version by from the `package.json` in `node_modules/webcom-reach` if you're using npm or from the `bower.json` in `bower_components/webcom-reach` .
* **What's the name and version of the browser you're using as well as the name and version of the OS**?

#### Template For Submitting Bug Reports

    [Short description of problem here]

    **Reproduction Steps:**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Expected behavior:**

    [Describe expected behavior here]

    **Observed behavior:**

    [Describe observed behavior here]

    **Screenshots and GIFs**

    ![Screenshots and GIFs which follow reproduction steps to demonstrate the problem](url)

    **Reach version:** [Enter Reach version here]
    **Browser and version:** [Enter Browser name and version here]
    **OS and version:** [Enter OS name and version here]

    **Additional information:**

    * Problem started happening recently, didn't happen in an older version of Reach: [Yes/No]
    * Problem can be reliably reproduced, doesn't happen randomly: [Yes/No]
    
## Styleguides

### Git Commit Messages

Reach uses [semantic-release](https://github.com/semantic-release/semantic-release) along with [commitizen](https://github.com/commitizen/cz-cli) and [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg) to simplify the commit message format convention.

You will need to install [commitizen](https://github.com/commitizen/cz-cli) globally first and then use `git cz` to commit instead of the traditional `git commit -m ...`.
