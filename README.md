[T3v Cookies]
=============

[![Travis CI Status][Travis CI Status]][Travis CI]

**The cookies extension of [TYPO3Voila].**

Dependencies
------------

* TYPO3 CMS 9.5 or greater
* Grid Elements extension
* VHS extension
* T3v Core extension
* T3v Content extension

Installation
------------

1. Add T3v Cookies as dependency to the [Composer] configuration
2. Run `composer install` or `composer update` to install all dependencies with Composer
3. Include the TypoScript for T3v Cookies

Grid Elements
-------------

* Note Grid Element

Development
-----------

### Setup

```
$ ./Scripts/Setup.sh
```

### Run Unit Tests

```
$ ./Scripts/Tests/Unit.sh
```

### Run Functional Tests

```
$ ./Scripts/Tests/Functional.sh
```

Bug Reports
-----------

GitHub Issues are used for managing bug reports and feature requests. If you run into issues, please search the issues
and submit new problems [here].

Versioning
----------

This library aims to adhere to [Semantic Versioning 2.0.0]. Violations of this scheme should be reported as bugs.
Specifically, if a minor or patch version is released that breaks backward compatibility, that version should be
immediately yanked and / or a new version should be immediately released that restores compatibility.

Credits
-------

### Icons

* [Gingerbread free icon]

Icons made by [Smashicons] from [Flaticon] is licensed by [CC 3.0 BY].

License
-------

T3v Cookies is released under the [MIT License (MIT)], see [LICENSE].

[Acceptance testing TYPO3]: https://wiki.typo3.org/Acceptance_testing "Acceptance testing TYPO3"
[Automated testing TYPO3]: https://wiki.typo3.org/Automated_testing "Automated testing TYPO3"
[CC 3.0 BY]: http://creativecommons.org/licenses/by/3.0/ "Creative Commons BY 3.0"
[Composer]: https://getcomposer.org "Dependency Manager for PHP"
[Flaticon]: https://www.flaticon.com "Flaticon"
[Functional testing TYPO3]: https://wiki.typo3.org/Functional_testing "Functional testing TYPO3"
[Gingerbread free icon]: http://www.flaticon.com/free-icon/gingerbread_135616 "Gingerbread free icon"
[here]: https://github.com/t3v/t3v_cookies/issues "GitHub Issue Tracker"
[LICENSE]: https://raw.githubusercontent.com/t3v/t3v_cookies/master/LICENSE "License"
[MIT License (MIT)]: http://opensource.org/licenses/MIT "The MIT License (MIT)"
[Semantic Versioning 2.0.0]: http://semver.org "Semantic Versioning 2.0.0"
[Smashicons]: https://www.flaticon.com/authors/smashicons "Smashicons"
[T3v Cookies]: https://t3v.github.io/t3v_cookies/ "The cookies extension of TYPO3Voila."
[Travis CI]: https://travis-ci.org/t3v/t3v_cookies "T3v Cookies at Travis CI"
[Travis CI Status]: https://img.shields.io/travis/t3v/t3v_cookies.svg?style=flat "Travis CI Status"
[TYPO3voila]: https://github.com/t3v "“UH LÁLÁ, TYPO3!”"
[Unit Testing TYPO3]: https://wiki.typo3.org/Unit_Testing_TYPO3 "Unit testing TYPO3"
