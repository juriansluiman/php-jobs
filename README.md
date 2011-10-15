php-jobs
========

Introduction
------------
This is a simple node.js script to run php scripts. This setup can be utilized
to perform some heavy tasks asynchronously from the php request a client performs.
With this system, it is therefore possible to server pages quickly where nontheless
some hard work is required.

Requirements
------------
This software is depending on Node.js and Redis. Please make sure you have them
installed on your system. On a Linux system with apt, it is as simple as:

    apt-get install redis-server nodejs

For other platforms, please visit the appropriate websites to install both packages.

Installation
------------
The easiest way to get a working copy of this project is to do a recursive
clone:

    git clone --recursive git://github.com/juriansluiman/php-jobs.git

After the clone is complete, run the manager.js script with node:

    node manager.js

If you're wondering what the `--recursive` flag is, keep reading:

Git Submodules
--------------
This project makes use of [Git submodules](http://book.git-scm.com/5_submodules.html).
Utilizing Git submodules allows us to reference an exact commit in the upstream
[juriansluiman/node-jobs](https://github.com/juriansluiman/node-jobs) and
[mranney/node_redis](https://github.com/mranney/node_redis) repositories and ensure
that those who have cloned the project have that same commit checked out. This
provides several benefits:

* Developers do not have to worry about which commit of the node-redis and node-jobs
  projects to have checked out for this project to work.

There are a couple of mild caveats to be aware of:

* Be sure to always run `git submodule update` after pulling, as merge/rebase
  does not automatically update the checked out commit in submodules if it has
  been changed.

(Thanks to [Evan Coury](https://github.com/EvanDotPro) for a large part of this README)