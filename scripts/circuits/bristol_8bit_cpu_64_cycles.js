var circuit_bristol_8bit_cpu_64_cycles = `
1648 1811
8 4 2 4 1 8 8 8 128
8 4 2 4 1 8 8 8 128

1 1 5 163 INV
1 1 4 164 INV
2 1 5 4 165 NAND
2 1 5 164 166 AND
2 1 163 4 167 AND
2 1 5 4 168 AND
1 1 27 169 INV
1 1 28 170 INV
1 1 29 171 INV
1 1 30 172 INV
2 1 172 171 173 AND
2 1 170 169 174 AND
2 1 173 174 175 AND
2 1 30 171 176 AND
2 1 170 169 177 AND
2 1 176 177 178 AND
2 1 172 29 179 AND
2 1 170 169 180 AND
2 1 179 180 181 AND
2 1 30 29 182 AND
2 1 170 169 183 AND
2 1 182 183 184 AND
2 1 172 171 185 AND
2 1 28 169 186 AND
2 1 185 186 187 AND
2 1 30 171 188 AND
2 1 28 169 189 AND
2 1 188 189 190 AND
2 1 172 29 191 AND
2 1 28 169 192 AND
2 1 191 192 193 AND
2 1 30 29 194 AND
2 1 28 169 195 AND
2 1 194 195 196 AND
2 1 196 10 197 AND
2 1 30 29 198 AND
2 1 28 27 199 AND
2 1 198 199 200 AND
1 1 200 201 INV
2 1 167 181 202 AND
2 1 167 187 203 AND
2 1 202 203 204 OR
2 1 167 178 205 AND
2 1 167 184 206 AND
2 1 204 165 207 OR
2 1 205 206 208 OR
2 1 207 208 209 OR
1 1 209 210 INV
2 1 168 187 211 AND
1 1 211 212 INV
2 1 168 181 213 AND
2 1 213 166 214 OR
2 1 168 178 215 AND
2 1 168 184 216 AND
2 1 215 216 217 OR
2 1 214 217 218 OR
1 1 218 219 INV
2 1 167 178 220 AND
2 1 167 181 221 AND
2 1 220 221 222 OR
2 1 167 184 223 AND
2 1 167 187 224 AND
2 1 223 224 225 OR
2 1 167 190 226 AND
2 1 167 193 227 AND
2 1 226 227 228 OR
2 1 222 225 229 OR
2 1 167 197 230 AND
2 1 228 230 231 OR
2 1 229 231 232 OR
1 1 232 233 INV
1 1 166 234 INV
2 1 168 178 235 AND
2 1 167 190 236 AND
2 1 235 236 237 OR
1 1 237 238 INV
2 1 168 187 239 AND
1 1 239 240 INV
2 1 168 181 241 AND
2 1 168 184 242 AND
2 1 241 242 243 OR
1 1 243 244 INV
2 1 168 184 245 AND
1 1 245 246 INV
2 1 168 181 247 AND
2 1 168 184 248 AND
2 1 247 248 249 OR
1 1 249 250 INV
2 1 5 4 251 AND
1 1 251 252 INV
1 1 165 253 INV
2 1 167 193 254 AND
2 1 167 197 255 AND
2 1 254 255 256 OR
1 1 256 257 INV
2 1 168 197 258 AND
1 1 258 259 INV
1 1 6 260 INV
1 1 7 261 INV
1 1 8 262 INV
1 1 9 263 INV
2 1 218 6 264 AND
2 1 7 8 265 AND
2 1 9 265 266 AND
2 1 264 265 267 AND
2 1 266 267 268 AND
2 1 218 6 269 AND
2 1 7 8 270 AND
2 1 263 270 271 AND
2 1 269 270 272 AND
2 1 271 272 273 AND
2 1 218 6 274 AND
2 1 7 262 275 AND
2 1 9 275 276 AND
2 1 274 275 277 AND
2 1 276 277 278 AND
2 1 218 6 279 AND
2 1 7 262 280 AND
2 1 263 280 281 AND
2 1 279 280 282 AND
2 1 281 282 283 AND
2 1 218 6 284 AND
2 1 261 8 285 AND
2 1 9 285 286 AND
2 1 284 285 287 AND
2 1 286 287 288 AND
2 1 218 6 289 AND
2 1 261 8 290 AND
2 1 263 290 291 AND
2 1 289 290 292 AND
2 1 291 292 293 AND
2 1 218 6 294 AND
2 1 261 262 295 AND
2 1 9 295 296 AND
2 1 294 295 297 AND
2 1 296 297 298 AND
2 1 218 6 299 AND
2 1 261 262 300 AND
2 1 263 300 301 AND
2 1 299 300 302 AND
2 1 301 302 303 AND
2 1 218 260 304 AND
2 1 7 8 305 AND
2 1 9 305 306 AND
2 1 304 305 307 AND
2 1 306 307 308 AND
2 1 218 260 309 AND
2 1 7 8 310 AND
2 1 263 310 311 AND
2 1 309 310 312 AND
2 1 311 312 313 AND
2 1 218 260 314 AND
2 1 7 262 315 AND
2 1 9 315 316 AND
2 1 314 315 317 AND
2 1 316 317 318 AND
2 1 218 260 319 AND
2 1 7 262 320 AND
2 1 263 320 321 AND
2 1 319 320 322 AND
2 1 321 322 323 AND
2 1 218 260 324 AND
2 1 261 8 325 AND
2 1 9 325 326 AND
2 1 324 325 327 AND
2 1 326 327 328 AND
2 1 218 260 329 AND
2 1 261 8 330 AND
2 1 263 330 331 AND
2 1 329 330 332 AND
2 1 331 332 333 AND
2 1 218 260 334 AND
2 1 261 262 335 AND
2 1 9 335 336 AND
2 1 334 335 337 AND
2 1 336 337 338 AND
2 1 218 260 339 AND
2 1 261 262 340 AND
2 1 263 340 341 AND
2 1 339 340 342 AND
2 1 341 342 343 AND
2 1 211 6 344 AND
2 1 7 8 345 AND
2 1 9 345 346 AND
2 1 344 345 347 AND
2 1 346 347 348 AND
2 1 211 6 349 AND
2 1 7 8 350 AND
2 1 263 350 351 AND
2 1 349 350 352 AND
2 1 351 352 353 AND
2 1 211 6 354 AND
2 1 7 262 355 AND
2 1 9 355 356 AND
2 1 354 355 357 AND
2 1 356 357 358 AND
2 1 211 6 359 AND
2 1 7 262 360 AND
2 1 263 360 361 AND
2 1 359 360 362 AND
2 1 361 362 363 AND
2 1 211 6 364 AND
2 1 261 8 365 AND
2 1 9 365 366 AND
2 1 364 365 367 AND
2 1 366 367 368 AND
2 1 211 6 369 AND
2 1 261 8 370 AND
2 1 263 370 371 AND
2 1 369 370 372 AND
2 1 371 372 373 AND
2 1 211 6 374 AND
2 1 261 262 375 AND
2 1 9 375 376 AND
2 1 374 375 377 AND
2 1 376 377 378 AND
2 1 211 6 379 AND
2 1 261 262 380 AND
2 1 263 380 381 AND
2 1 379 380 382 AND
2 1 381 382 383 AND
2 1 211 260 384 AND
2 1 7 8 385 AND
2 1 9 385 386 AND
2 1 384 385 387 AND
2 1 386 387 388 AND
2 1 211 260 389 AND
2 1 7 8 390 AND
2 1 263 390 391 AND
2 1 389 390 392 AND
2 1 391 392 393 AND
2 1 211 260 394 AND
2 1 7 262 395 AND
2 1 9 395 396 AND
2 1 394 395 397 AND
2 1 396 397 398 AND
2 1 211 260 399 AND
2 1 7 262 400 AND
2 1 263 400 401 AND
2 1 399 400 402 AND
2 1 401 402 403 AND
2 1 211 260 404 AND
2 1 261 8 405 AND
2 1 9 405 406 AND
2 1 404 405 407 AND
2 1 406 407 408 AND
2 1 211 260 409 AND
2 1 261 8 410 AND
2 1 263 410 411 AND
2 1 409 410 412 AND
2 1 411 412 413 AND
2 1 211 260 414 AND
2 1 261 262 415 AND
2 1 9 415 416 AND
2 1 414 415 417 AND
2 1 416 417 418 AND
2 1 211 260 419 AND
2 1 261 262 420 AND
2 1 263 420 421 AND
2 1 419 420 422 AND
2 1 421 422 423 AND
2 1 155 268 424 AND
2 1 147 273 425 AND
2 1 139 278 426 AND
2 1 131 283 427 AND
2 1 123 288 428 AND
2 1 115 293 429 AND
2 1 107 298 430 AND
2 1 99 303 431 AND
2 1 91 308 432 AND
2 1 83 313 433 AND
2 1 75 318 434 AND
2 1 67 323 435 AND
2 1 59 328 436 AND
2 1 51 333 437 AND
2 1 43 338 438 AND
2 1 35 343 439 AND
2 1 156 268 440 AND
2 1 148 273 441 AND
2 1 140 278 442 AND
2 1 132 283 443 AND
2 1 124 288 444 AND
2 1 116 293 445 AND
2 1 108 298 446 AND
2 1 100 303 447 AND
2 1 92 308 448 AND
2 1 84 313 449 AND
2 1 76 318 450 AND
2 1 68 323 451 AND
2 1 60 328 452 AND
2 1 52 333 453 AND
2 1 44 338 454 AND
2 1 36 343 455 AND
2 1 157 268 456 AND
2 1 149 273 457 AND
2 1 141 278 458 AND
2 1 133 283 459 AND
2 1 125 288 460 AND
2 1 117 293 461 AND
2 1 109 298 462 AND
2 1 101 303 463 AND
2 1 93 308 464 AND
2 1 85 313 465 AND
2 1 77 318 466 AND
2 1 69 323 467 AND
2 1 61 328 468 AND
2 1 53 333 469 AND
2 1 45 338 470 AND
2 1 37 343 471 AND
2 1 158 268 472 AND
2 1 150 273 473 AND
2 1 142 278 474 AND
2 1 134 283 475 AND
2 1 126 288 476 AND
2 1 118 293 477 AND
2 1 110 298 478 AND
2 1 102 303 479 AND
2 1 94 308 480 AND
2 1 86 313 481 AND
2 1 78 318 482 AND
2 1 70 323 483 AND
2 1 62 328 484 AND
2 1 54 333 485 AND
2 1 46 338 486 AND
2 1 38 343 487 AND
2 1 159 268 488 AND
2 1 151 273 489 AND
2 1 143 278 490 AND
2 1 135 283 491 AND
2 1 127 288 492 AND
2 1 119 293 493 AND
2 1 111 298 494 AND
2 1 103 303 495 AND
2 1 95 308 496 AND
2 1 87 313 497 AND
2 1 79 318 498 AND
2 1 71 323 499 AND
2 1 63 328 500 AND
2 1 55 333 501 AND
2 1 47 338 502 AND
2 1 39 343 503 AND
2 1 160 268 504 AND
2 1 152 273 505 AND
2 1 144 278 506 AND
2 1 136 283 507 AND
2 1 128 288 508 AND
2 1 120 293 509 AND
2 1 112 298 510 AND
2 1 104 303 511 AND
2 1 96 308 512 AND
2 1 88 313 513 AND
2 1 80 318 514 AND
2 1 72 323 515 AND
2 1 64 328 516 AND
2 1 56 333 517 AND
2 1 48 338 518 AND
2 1 40 343 519 AND
2 1 161 268 520 AND
2 1 153 273 521 AND
2 1 145 278 522 AND
2 1 137 283 523 AND
2 1 129 288 524 AND
2 1 121 293 525 AND
2 1 113 298 526 AND
2 1 105 303 527 AND
2 1 97 308 528 AND
2 1 89 313 529 AND
2 1 81 318 530 AND
2 1 73 323 531 AND
2 1 65 328 532 AND
2 1 57 333 533 AND
2 1 49 338 534 AND
2 1 41 343 535 AND
2 1 162 268 536 AND
2 1 154 273 537 AND
2 1 146 278 538 AND
2 1 138 283 539 AND
2 1 130 288 540 AND
2 1 122 293 541 AND
2 1 114 298 542 AND
2 1 106 303 543 AND
2 1 98 308 544 AND
2 1 90 313 545 AND
2 1 82 318 546 AND
2 1 74 323 547 AND
2 1 66 328 548 AND
2 1 58 333 549 AND
2 1 50 338 550 AND
2 1 42 343 551 AND
2 1 424 9 552 AND
2 1 425 263 553 AND
2 1 552 553 554 OR
2 1 426 9 555 AND
2 1 427 263 556 AND
2 1 555 556 557 OR
2 1 428 9 558 AND
2 1 429 263 559 AND
2 1 558 559 560 OR
2 1 430 9 561 AND
2 1 431 263 562 AND
2 1 561 562 563 OR
2 1 432 9 564 AND
2 1 433 263 565 AND
2 1 564 565 566 OR
2 1 434 9 567 AND
2 1 435 263 568 AND
2 1 567 568 569 OR
2 1 436 9 570 AND
2 1 437 263 571 AND
2 1 570 571 572 OR
2 1 438 9 573 AND
2 1 439 263 574 AND
2 1 573 574 575 OR
2 1 554 8 576 AND
2 1 557 262 577 AND
2 1 576 577 578 OR
2 1 560 8 579 AND
2 1 563 262 580 AND
2 1 579 580 581 OR
2 1 566 8 582 AND
2 1 569 262 583 AND
2 1 582 583 584 OR
2 1 572 8 585 AND
2 1 575 262 586 AND
2 1 585 586 587 OR
2 1 578 7 588 AND
2 1 581 261 589 AND
2 1 588 589 590 OR
2 1 584 7 591 AND
2 1 587 261 592 AND
2 1 591 592 593 OR
2 1 590 6 594 AND
2 1 593 260 595 AND
2 1 594 595 596 OR
2 1 440 9 597 AND
2 1 441 263 598 AND
2 1 597 598 599 OR
2 1 442 9 600 AND
2 1 443 263 601 AND
2 1 600 601 602 OR
2 1 444 9 603 AND
2 1 445 263 604 AND
2 1 603 604 605 OR
2 1 446 9 606 AND
2 1 447 263 607 AND
2 1 606 607 608 OR
2 1 448 9 609 AND
2 1 449 263 610 AND
2 1 609 610 611 OR
2 1 450 9 612 AND
2 1 451 263 613 AND
2 1 612 613 614 OR
2 1 452 9 615 AND
2 1 453 263 616 AND
2 1 615 616 617 OR
2 1 454 9 618 AND
2 1 455 263 619 AND
2 1 618 619 620 OR
2 1 599 8 621 AND
2 1 602 262 622 AND
2 1 621 622 623 OR
2 1 605 8 624 AND
2 1 608 262 625 AND
2 1 624 625 626 OR
2 1 611 8 627 AND
2 1 614 262 628 AND
2 1 627 628 629 OR
2 1 617 8 630 AND
2 1 620 262 631 AND
2 1 630 631 632 OR
2 1 623 7 633 AND
2 1 626 261 634 AND
2 1 633 634 635 OR
2 1 629 7 636 AND
2 1 632 261 637 AND
2 1 636 637 638 OR
2 1 635 6 639 AND
2 1 638 260 640 AND
2 1 639 640 641 OR
2 1 456 9 642 AND
2 1 457 263 643 AND
2 1 642 643 644 OR
2 1 458 9 645 AND
2 1 459 263 646 AND
2 1 645 646 647 OR
2 1 460 9 648 AND
2 1 461 263 649 AND
2 1 648 649 650 OR
2 1 462 9 651 AND
2 1 463 263 652 AND
2 1 651 652 653 OR
2 1 464 9 654 AND
2 1 465 263 655 AND
2 1 654 655 656 OR
2 1 466 9 657 AND
2 1 467 263 658 AND
2 1 657 658 659 OR
2 1 468 9 660 AND
2 1 469 263 661 AND
2 1 660 661 662 OR
2 1 470 9 663 AND
2 1 471 263 664 AND
2 1 663 664 665 OR
2 1 644 8 666 AND
2 1 647 262 667 AND
2 1 666 667 668 OR
2 1 650 8 669 AND
2 1 653 262 670 AND
2 1 669 670 671 OR
2 1 656 8 672 AND
2 1 659 262 673 AND
2 1 672 673 674 OR
2 1 662 8 675 AND
2 1 665 262 676 AND
2 1 675 676 677 OR
2 1 668 7 678 AND
2 1 671 261 679 AND
2 1 678 679 680 OR
2 1 674 7 681 AND
2 1 677 261 682 AND
2 1 681 682 683 OR
2 1 680 6 684 AND
2 1 683 260 685 AND
2 1 684 685 686 OR
2 1 472 9 687 AND
2 1 473 263 688 AND
2 1 687 688 689 OR
2 1 474 9 690 AND
2 1 475 263 691 AND
2 1 690 691 692 OR
2 1 476 9 693 AND
2 1 477 263 694 AND
2 1 693 694 695 OR
2 1 478 9 696 AND
2 1 479 263 697 AND
2 1 696 697 698 OR
2 1 480 9 699 AND
2 1 481 263 700 AND
2 1 699 700 701 OR
2 1 482 9 702 AND
2 1 483 263 703 AND
2 1 702 703 704 OR
2 1 484 9 705 AND
2 1 485 263 706 AND
2 1 705 706 707 OR
2 1 486 9 708 AND
2 1 487 263 709 AND
2 1 708 709 710 OR
2 1 689 8 711 AND
2 1 692 262 712 AND
2 1 711 712 713 OR
2 1 695 8 714 AND
2 1 698 262 715 AND
2 1 714 715 716 OR
2 1 701 8 717 AND
2 1 704 262 718 AND
2 1 717 718 719 OR
2 1 707 8 720 AND
2 1 710 262 721 AND
2 1 720 721 722 OR
2 1 713 7 723 AND
2 1 716 261 724 AND
2 1 723 724 725 OR
2 1 719 7 726 AND
2 1 722 261 727 AND
2 1 726 727 728 OR
2 1 725 6 729 AND
2 1 728 260 730 AND
2 1 729 730 731 OR
2 1 488 9 732 AND
2 1 489 263 733 AND
2 1 732 733 734 OR
2 1 490 9 735 AND
2 1 491 263 736 AND
2 1 735 736 737 OR
2 1 492 9 738 AND
2 1 493 263 739 AND
2 1 738 739 740 OR
2 1 494 9 741 AND
2 1 495 263 742 AND
2 1 741 742 743 OR
2 1 496 9 744 AND
2 1 497 263 745 AND
2 1 744 745 746 OR
2 1 498 9 747 AND
2 1 499 263 748 AND
2 1 747 748 749 OR
2 1 500 9 750 AND
2 1 501 263 751 AND
2 1 750 751 752 OR
2 1 502 9 753 AND
2 1 503 263 754 AND
2 1 753 754 755 OR
2 1 734 8 756 AND
2 1 737 262 757 AND
2 1 756 757 758 OR
2 1 740 8 759 AND
2 1 743 262 760 AND
2 1 759 760 761 OR
2 1 746 8 762 AND
2 1 749 262 763 AND
2 1 762 763 764 OR
2 1 752 8 765 AND
2 1 755 262 766 AND
2 1 765 766 767 OR
2 1 758 7 768 AND
2 1 761 261 769 AND
2 1 768 769 770 OR
2 1 764 7 771 AND
2 1 767 261 772 AND
2 1 771 772 773 OR
2 1 770 6 774 AND
2 1 773 260 775 AND
2 1 774 775 776 OR
2 1 504 9 777 AND
2 1 505 263 778 AND
2 1 777 778 779 OR
2 1 506 9 780 AND
2 1 507 263 781 AND
2 1 780 781 782 OR
2 1 508 9 783 AND
2 1 509 263 784 AND
2 1 783 784 785 OR
2 1 510 9 786 AND
2 1 511 263 787 AND
2 1 786 787 788 OR
2 1 512 9 789 AND
2 1 513 263 790 AND
2 1 789 790 791 OR
2 1 514 9 792 AND
2 1 515 263 793 AND
2 1 792 793 794 OR
2 1 516 9 795 AND
2 1 517 263 796 AND
2 1 795 796 797 OR
2 1 518 9 798 AND
2 1 519 263 799 AND
2 1 798 799 800 OR
2 1 779 8 801 AND
2 1 782 262 802 AND
2 1 801 802 803 OR
2 1 785 8 804 AND
2 1 788 262 805 AND
2 1 804 805 806 OR
2 1 791 8 807 AND
2 1 794 262 808 AND
2 1 807 808 809 OR
2 1 797 8 810 AND
2 1 800 262 811 AND
2 1 810 811 812 OR
2 1 803 7 813 AND
2 1 806 261 814 AND
2 1 813 814 815 OR
2 1 809 7 816 AND
2 1 812 261 817 AND
2 1 816 817 818 OR
2 1 815 6 819 AND
2 1 818 260 820 AND
2 1 819 820 821 OR
2 1 520 9 822 AND
2 1 521 263 823 AND
2 1 822 823 824 OR
2 1 522 9 825 AND
2 1 523 263 826 AND
2 1 825 826 827 OR
2 1 524 9 828 AND
2 1 525 263 829 AND
2 1 828 829 830 OR
2 1 526 9 831 AND
2 1 527 263 832 AND
2 1 831 832 833 OR
2 1 528 9 834 AND
2 1 529 263 835 AND
2 1 834 835 836 OR
2 1 530 9 837 AND
2 1 531 263 838 AND
2 1 837 838 839 OR
2 1 532 9 840 AND
2 1 533 263 841 AND
2 1 840 841 842 OR
2 1 534 9 843 AND
2 1 535 263 844 AND
2 1 843 844 845 OR
2 1 824 8 846 AND
2 1 827 262 847 AND
2 1 846 847 848 OR
2 1 830 8 849 AND
2 1 833 262 850 AND
2 1 849 850 851 OR
2 1 836 8 852 AND
2 1 839 262 853 AND
2 1 852 853 854 OR
2 1 842 8 855 AND
2 1 845 262 856 AND
2 1 855 856 857 OR
2 1 848 7 858 AND
2 1 851 261 859 AND
2 1 858 859 860 OR
2 1 854 7 861 AND
2 1 857 261 862 AND
2 1 861 862 863 OR
2 1 860 6 864 AND
2 1 863 260 865 AND
2 1 864 865 866 OR
2 1 536 9 867 AND
2 1 537 263 868 AND
2 1 867 868 869 OR
2 1 538 9 870 AND
2 1 539 263 871 AND
2 1 870 871 872 OR
2 1 540 9 873 AND
2 1 541 263 874 AND
2 1 873 874 875 OR
2 1 542 9 876 AND
2 1 543 263 877 AND
2 1 876 877 878 OR
2 1 544 9 879 AND
2 1 545 263 880 AND
2 1 879 880 881 OR
2 1 546 9 882 AND
2 1 547 263 883 AND
2 1 882 883 884 OR
2 1 548 9 885 AND
2 1 549 263 886 AND
2 1 885 886 887 OR
2 1 550 9 888 AND
2 1 551 263 889 AND
2 1 888 889 890 OR
2 1 869 8 891 AND
2 1 872 262 892 AND
2 1 891 892 893 OR
2 1 875 8 894 AND
2 1 878 262 895 AND
2 1 894 895 896 OR
2 1 881 8 897 AND
2 1 884 262 898 AND
2 1 897 898 899 OR
2 1 887 8 900 AND
2 1 890 262 901 AND
2 1 900 901 902 OR
2 1 893 7 903 AND
2 1 896 261 904 AND
2 1 903 904 905 OR
2 1 899 7 906 AND
2 1 902 261 907 AND
2 1 906 907 908 OR
2 1 905 6 909 AND
2 1 908 260 910 AND
2 1 909 910 911 OR
2 1 218 596 912 AND
2 1 218 641 913 AND
2 1 218 686 914 AND
2 1 218 731 915 AND
2 1 218 776 916 AND
2 1 218 821 917 AND
2 1 218 866 918 AND
2 1 218 911 919 AND
2 1 2 2 920 XNOR
2 1 920 3 921 AND
2 1 920 3 922 XOR
2 1 921 2 923 AND
2 1 921 2 924 XOR
2 1 923 1 925 AND
2 1 923 1 926 XOR
2 1 925 0 927 XOR
2 1 922 166 928 AND
2 1 3 234 929 AND
2 1 928 929 930 OR
2 1 924 166 931 AND
2 1 2 234 932 AND
2 1 931 932 933 OR
2 1 926 166 934 AND
2 1 1 234 935 AND
2 1 934 935 936 OR
2 1 927 166 937 AND
2 1 0 234 938 AND
2 1 937 938 939 OR
2 1 165 930 940 AND
2 1 219 940 941 AND
2 1 218 919 942 AND
2 1 941 942 943 OR
2 1 240 34 944 AND
2 1 239 18 945 AND
2 1 944 945 946 OR
2 1 232 239 947 OR
1 1 947 948 INV
2 1 948 943 949 AND
2 1 947 946 950 AND
2 1 949 950 951 OR
2 1 165 933 952 AND
2 1 219 952 953 AND
2 1 218 918 954 AND
2 1 953 954 955 OR
2 1 240 33 956 AND
2 1 239 17 957 AND
2 1 956 957 958 OR
2 1 232 239 959 OR
1 1 959 960 INV
2 1 960 955 961 AND
2 1 959 958 962 AND
2 1 961 962 963 OR
2 1 165 936 964 AND
2 1 219 964 965 AND
2 1 218 917 966 AND
2 1 965 966 967 OR
2 1 240 32 968 AND
2 1 239 16 969 AND
2 1 968 969 970 OR
2 1 232 239 971 OR
1 1 971 972 INV
2 1 972 967 973 AND
2 1 971 970 974 AND
2 1 973 974 975 OR
2 1 165 939 976 AND
2 1 219 976 977 AND
2 1 218 916 978 AND
2 1 977 978 979 OR
2 1 240 31 980 AND
2 1 239 15 981 AND
2 1 980 981 982 OR
2 1 232 239 983 OR
1 1 983 984 INV
2 1 984 979 985 AND
2 1 983 982 986 AND
2 1 985 986 987 OR
2 1 218 218 988 XOR
2 1 218 915 989 AND
2 1 240 988 990 AND
2 1 239 14 991 AND
2 1 990 991 992 OR
2 1 232 239 993 OR
1 1 993 994 INV
2 1 994 989 995 AND
2 1 993 992 996 AND
2 1 995 996 997 OR
2 1 218 218 998 XOR
2 1 218 914 999 AND
2 1 240 998 1000 AND
2 1 239 13 1001 AND
2 1 1000 1001 1002 OR
2 1 232 239 1003 OR
1 1 1003 1004 INV
2 1 1004 999 1005 AND
2 1 1003 1002 1006 AND
2 1 1005 1006 1007 OR
2 1 218 218 1008 XOR
2 1 218 913 1009 AND
2 1 240 1008 1010 AND
2 1 239 12 1011 AND
2 1 1010 1011 1012 OR
2 1 232 239 1013 OR
1 1 1013 1014 INV
2 1 1014 1009 1015 AND
2 1 1013 1012 1016 AND
2 1 1015 1016 1017 OR
2 1 218 218 1018 XOR
2 1 218 912 1019 AND
2 1 240 1018 1020 AND
2 1 239 11 1021 AND
2 1 1020 1021 1022 OR
2 1 232 239 1023 OR
1 1 1023 1024 INV
2 1 1024 1019 1025 AND
2 1 1023 1022 1026 AND
2 1 1025 1026 1027 OR
2 1 951 166 1028 AND
2 1 34 234 1029 AND
2 1 1028 1029 1030 OR
2 1 963 166 1031 AND
2 1 33 234 1032 AND
2 1 1031 1032 1033 OR
2 1 975 166 1034 AND
2 1 32 234 1035 AND
2 1 1034 1035 1036 OR
2 1 987 166 1037 AND
2 1 31 234 1038 AND
2 1 1037 1038 1039 OR
2 1 997 166 1040 AND
2 1 30 234 1041 AND
2 1 1040 1041 1042 OR
2 1 1007 166 1043 AND
2 1 29 234 1044 AND
2 1 1043 1044 1045 OR
2 1 1017 166 1046 AND
2 1 28 234 1047 AND
2 1 1046 1047 1048 OR
2 1 1027 166 1049 AND
2 1 27 234 1050 AND
2 1 1049 1050 1051 OR
2 1 951 209 1052 AND
2 1 9 210 1053 AND
2 1 1052 1053 1054 OR
2 1 963 209 1055 AND
2 1 8 210 1056 AND
2 1 1055 1056 1057 OR
2 1 975 209 1058 AND
2 1 7 210 1059 AND
2 1 1058 1059 1060 OR
2 1 987 209 1061 AND
2 1 6 210 1062 AND
2 1 1061 1062 1063 OR
2 1 951 256 1064 AND
2 1 930 257 1065 AND
2 1 1064 1065 1066 OR
2 1 963 256 1067 AND
2 1 933 257 1068 AND
2 1 1067 1068 1069 OR
2 1 975 256 1070 AND
2 1 936 257 1071 AND
2 1 1070 1071 1072 OR
2 1 987 256 1073 AND
2 1 939 257 1074 AND
2 1 1073 1074 1075 OR
2 1 5 4 1076 XOR
2 1 252 163 1077 AND
2 1 200 5 1078 AND
2 1 201 1077 1079 AND
2 1 1078 1079 1080 OR
2 1 200 4 1081 AND
2 1 201 1076 1082 AND
2 1 1081 1082 1083 OR
2 1 249 951 1084 AND
2 1 250 26 1085 AND
2 1 1084 1085 1086 OR
2 1 249 963 1087 AND
2 1 250 25 1088 AND
2 1 1087 1088 1089 OR
2 1 249 975 1090 AND
2 1 250 24 1091 AND
2 1 1090 1091 1092 OR
2 1 249 987 1093 AND
2 1 250 23 1094 AND
2 1 1093 1094 1095 OR
2 1 249 997 1096 AND
2 1 250 22 1097 AND
2 1 1096 1097 1098 OR
2 1 249 1007 1099 AND
2 1 250 21 1100 AND
2 1 1099 1100 1101 OR
2 1 249 1017 1102 AND
2 1 250 20 1103 AND
2 1 1102 1103 1104 OR
2 1 249 1027 1105 AND
2 1 250 19 1106 AND
2 1 1105 1106 1107 OR
1 1 1086 1108 INV
1 1 1089 1109 INV
1 1 1092 1110 INV
1 1 1095 1111 INV
1 1 1098 1112 INV
1 1 1101 1113 INV
1 1 1104 1114 INV
1 1 1107 1115 INV
2 1 1108 245 1116 AND
2 1 246 1086 1117 AND
2 1 1116 1117 1118 OR
2 1 1109 245 1119 AND
2 1 246 1089 1120 AND
2 1 1119 1120 1121 OR
2 1 1110 245 1122 AND
2 1 246 1092 1123 AND
2 1 1122 1123 1124 OR
2 1 1111 245 1125 AND
2 1 246 1095 1126 AND
2 1 1125 1126 1127 OR
2 1 1112 245 1128 AND
2 1 246 1098 1129 AND
2 1 1128 1129 1130 OR
2 1 1113 245 1131 AND
2 1 246 1101 1132 AND
2 1 1131 1132 1133 OR
2 1 1114 245 1134 AND
2 1 246 1104 1135 AND
2 1 1134 1135 1136 OR
2 1 1115 245 1137 AND
2 1 246 1107 1138 AND
2 1 1137 1138 1139 OR
2 1 237 951 1140 AND
2 1 238 18 1141 AND
2 1 1140 1141 1142 OR
2 1 237 963 1143 AND
2 1 238 17 1144 AND
2 1 1143 1144 1145 OR
2 1 237 975 1146 AND
2 1 238 16 1147 AND
2 1 1146 1147 1148 OR
2 1 237 987 1149 AND
2 1 238 15 1150 AND
2 1 1149 1150 1151 OR
2 1 237 997 1152 AND
2 1 238 14 1153 AND
2 1 1152 1153 1154 OR
2 1 237 1007 1155 AND
2 1 238 13 1156 AND
2 1 1155 1156 1157 OR
2 1 237 1017 1158 AND
2 1 238 12 1159 AND
2 1 1158 1159 1160 OR
2 1 237 1027 1161 AND
2 1 238 11 1162 AND
2 1 1161 1162 1163 OR
2 1 18 243 1164 AND
2 1 17 243 1165 AND
2 1 16 243 1166 AND
2 1 15 243 1167 AND
2 1 14 243 1168 AND
2 1 13 243 1169 AND
2 1 12 243 1170 AND
2 1 11 243 1171 AND
2 1 1118 243 1172 AND
2 1 1121 243 1173 AND
2 1 1124 243 1174 AND
2 1 1127 243 1175 AND
2 1 1130 243 1176 AND
2 1 1133 243 1177 AND
2 1 1136 243 1178 AND
2 1 1139 243 1179 AND
2 1 245 1164 1180 AND
2 1 245 1164 1181 XOR
2 1 1181 1172 1182 AND
2 1 1181 1172 1183 XOR
2 1 1180 1182 1184 OR
2 1 1184 1165 1185 AND
2 1 1184 1165 1186 XOR
2 1 1186 1173 1187 AND
2 1 1186 1173 1188 XOR
2 1 1185 1187 1189 OR
2 1 1189 1166 1190 AND
2 1 1189 1166 1191 XOR
2 1 1191 1174 1192 AND
2 1 1191 1174 1193 XOR
2 1 1190 1192 1194 OR
2 1 1194 1167 1195 AND
2 1 1194 1167 1196 XOR
2 1 1196 1175 1197 AND
2 1 1196 1175 1198 XOR
2 1 1195 1197 1199 OR
2 1 1199 1168 1200 AND
2 1 1199 1168 1201 XOR
2 1 1201 1176 1202 AND
2 1 1201 1176 1203 XOR
2 1 1200 1202 1204 OR
2 1 1204 1169 1205 AND
2 1 1204 1169 1206 XOR
2 1 1206 1177 1207 AND
2 1 1206 1177 1208 XOR
2 1 1205 1207 1209 OR
2 1 1209 1170 1210 AND
2 1 1209 1170 1211 XOR
2 1 1211 1178 1212 AND
2 1 1211 1178 1213 XOR
2 1 1210 1212 1214 OR
2 1 1214 1171 1215 AND
2 1 1214 1171 1216 XOR
2 1 1216 1179 1217 AND
2 1 1216 1179 1218 XOR
2 1 1215 1217 1219 OR
2 1 243 243 1220 XOR
2 1 245 245 1221 XOR
2 1 259 10 1222 AND
2 1 1219 1222 1223 OR
2 1 1183 243 1224 AND
2 1 244 1142 1225 AND
2 1 1224 1225 1226 OR
2 1 1188 243 1227 AND
2 1 244 1145 1228 AND
2 1 1227 1228 1229 OR
2 1 1193 243 1230 AND
2 1 244 1148 1231 AND
2 1 1230 1231 1232 OR
2 1 1198 243 1233 AND
2 1 244 1151 1234 AND
2 1 1233 1234 1235 OR
2 1 1203 243 1236 AND
2 1 244 1154 1237 AND
2 1 1236 1237 1238 OR
2 1 1208 243 1239 AND
2 1 244 1157 1240 AND
2 1 1239 1240 1241 OR
2 1 1213 243 1242 AND
2 1 244 1160 1243 AND
2 1 1242 1243 1244 OR
2 1 1218 243 1245 AND
2 1 244 1163 1246 AND
2 1 1245 1246 1247 OR
1 1 423 1248 INV
1 1 418 1249 INV
1 1 413 1250 INV
1 1 408 1251 INV
1 1 403 1252 INV
1 1 398 1253 INV
1 1 393 1254 INV
1 1 388 1255 INV
1 1 383 1256 INV
1 1 378 1257 INV
1 1 373 1258 INV
1 1 368 1259 INV
1 1 363 1260 INV
1 1 358 1261 INV
1 1 353 1262 INV
1 1 348 1263 INV
2 1 423 951 1264 AND
2 1 1248 42 1265 AND
2 1 1264 1265 1266 OR
2 1 423 963 1267 AND
2 1 1248 41 1268 AND
2 1 1267 1268 1269 OR
2 1 423 975 1270 AND
2 1 1248 40 1271 AND
2 1 1270 1271 1272 OR
2 1 423 987 1273 AND
2 1 1248 39 1274 AND
2 1 1273 1274 1275 OR
2 1 423 997 1276 AND
2 1 1248 38 1277 AND
2 1 1276 1277 1278 OR
2 1 423 1007 1279 AND
2 1 1248 37 1280 AND
2 1 1279 1280 1281 OR
2 1 423 1017 1282 AND
2 1 1248 36 1283 AND
2 1 1282 1283 1284 OR
2 1 423 1027 1285 AND
2 1 1248 35 1286 AND
2 1 1285 1286 1287 OR
2 1 418 951 1288 AND
2 1 1249 50 1289 AND
2 1 1288 1289 1290 OR
2 1 418 963 1291 AND
2 1 1249 49 1292 AND
2 1 1291 1292 1293 OR
2 1 418 975 1294 AND
2 1 1249 48 1295 AND
2 1 1294 1295 1296 OR
2 1 418 987 1297 AND
2 1 1249 47 1298 AND
2 1 1297 1298 1299 OR
2 1 418 997 1300 AND
2 1 1249 46 1301 AND
2 1 1300 1301 1302 OR
2 1 418 1007 1303 AND
2 1 1249 45 1304 AND
2 1 1303 1304 1305 OR
2 1 418 1017 1306 AND
2 1 1249 44 1307 AND
2 1 1306 1307 1308 OR
2 1 418 1027 1309 AND
2 1 1249 43 1310 AND
2 1 1309 1310 1311 OR
2 1 413 951 1312 AND
2 1 1250 58 1313 AND
2 1 1312 1313 1314 OR
2 1 413 963 1315 AND
2 1 1250 57 1316 AND
2 1 1315 1316 1317 OR
2 1 413 975 1318 AND
2 1 1250 56 1319 AND
2 1 1318 1319 1320 OR
2 1 413 987 1321 AND
2 1 1250 55 1322 AND
2 1 1321 1322 1323 OR
2 1 413 997 1324 AND
2 1 1250 54 1325 AND
2 1 1324 1325 1326 OR
2 1 413 1007 1327 AND
2 1 1250 53 1328 AND
2 1 1327 1328 1329 OR
2 1 413 1017 1330 AND
2 1 1250 52 1331 AND
2 1 1330 1331 1332 OR
2 1 413 1027 1333 AND
2 1 1250 51 1334 AND
2 1 1333 1334 1335 OR
2 1 408 951 1336 AND
2 1 1251 66 1337 AND
2 1 1336 1337 1338 OR
2 1 408 963 1339 AND
2 1 1251 65 1340 AND
2 1 1339 1340 1341 OR
2 1 408 975 1342 AND
2 1 1251 64 1343 AND
2 1 1342 1343 1344 OR
2 1 408 987 1345 AND
2 1 1251 63 1346 AND
2 1 1345 1346 1347 OR
2 1 408 997 1348 AND
2 1 1251 62 1349 AND
2 1 1348 1349 1350 OR
2 1 408 1007 1351 AND
2 1 1251 61 1352 AND
2 1 1351 1352 1353 OR
2 1 408 1017 1354 AND
2 1 1251 60 1355 AND
2 1 1354 1355 1356 OR
2 1 408 1027 1357 AND
2 1 1251 59 1358 AND
2 1 1357 1358 1359 OR
2 1 403 951 1360 AND
2 1 1252 74 1361 AND
2 1 1360 1361 1362 OR
2 1 403 963 1363 AND
2 1 1252 73 1364 AND
2 1 1363 1364 1365 OR
2 1 403 975 1366 AND
2 1 1252 72 1367 AND
2 1 1366 1367 1368 OR
2 1 403 987 1369 AND
2 1 1252 71 1370 AND
2 1 1369 1370 1371 OR
2 1 403 997 1372 AND
2 1 1252 70 1373 AND
2 1 1372 1373 1374 OR
2 1 403 1007 1375 AND
2 1 1252 69 1376 AND
2 1 1375 1376 1377 OR
2 1 403 1017 1378 AND
2 1 1252 68 1379 AND
2 1 1378 1379 1380 OR
2 1 403 1027 1381 AND
2 1 1252 67 1382 AND
2 1 1381 1382 1383 OR
2 1 398 951 1384 AND
2 1 1253 82 1385 AND
2 1 1384 1385 1386 OR
2 1 398 963 1387 AND
2 1 1253 81 1388 AND
2 1 1387 1388 1389 OR
2 1 398 975 1390 AND
2 1 1253 80 1391 AND
2 1 1390 1391 1392 OR
2 1 398 987 1393 AND
2 1 1253 79 1394 AND
2 1 1393 1394 1395 OR
2 1 398 997 1396 AND
2 1 1253 78 1397 AND
2 1 1396 1397 1398 OR
2 1 398 1007 1399 AND
2 1 1253 77 1400 AND
2 1 1399 1400 1401 OR
2 1 398 1017 1402 AND
2 1 1253 76 1403 AND
2 1 1402 1403 1404 OR
2 1 398 1027 1405 AND
2 1 1253 75 1406 AND
2 1 1405 1406 1407 OR
2 1 393 951 1408 AND
2 1 1254 90 1409 AND
2 1 1408 1409 1410 OR
2 1 393 963 1411 AND
2 1 1254 89 1412 AND
2 1 1411 1412 1413 OR
2 1 393 975 1414 AND
2 1 1254 88 1415 AND
2 1 1414 1415 1416 OR
2 1 393 987 1417 AND
2 1 1254 87 1418 AND
2 1 1417 1418 1419 OR
2 1 393 997 1420 AND
2 1 1254 86 1421 AND
2 1 1420 1421 1422 OR
2 1 393 1007 1423 AND
2 1 1254 85 1424 AND
2 1 1423 1424 1425 OR
2 1 393 1017 1426 AND
2 1 1254 84 1427 AND
2 1 1426 1427 1428 OR
2 1 393 1027 1429 AND
2 1 1254 83 1430 AND
2 1 1429 1430 1431 OR
2 1 388 951 1432 AND
2 1 1255 98 1433 AND
2 1 1432 1433 1434 OR
2 1 388 963 1435 AND
2 1 1255 97 1436 AND
2 1 1435 1436 1437 OR
2 1 388 975 1438 AND
2 1 1255 96 1439 AND
2 1 1438 1439 1440 OR
2 1 388 987 1441 AND
2 1 1255 95 1442 AND
2 1 1441 1442 1443 OR
2 1 388 997 1444 AND
2 1 1255 94 1445 AND
2 1 1444 1445 1446 OR
2 1 388 1007 1447 AND
2 1 1255 93 1448 AND
2 1 1447 1448 1449 OR
2 1 388 1017 1450 AND
2 1 1255 92 1451 AND
2 1 1450 1451 1452 OR
2 1 388 1027 1453 AND
2 1 1255 91 1454 AND
2 1 1453 1454 1455 OR
2 1 383 951 1456 AND
2 1 1256 106 1457 AND
2 1 1456 1457 1458 OR
2 1 383 963 1459 AND
2 1 1256 105 1460 AND
2 1 1459 1460 1461 OR
2 1 383 975 1462 AND
2 1 1256 104 1463 AND
2 1 1462 1463 1464 OR
2 1 383 987 1465 AND
2 1 1256 103 1466 AND
2 1 1465 1466 1467 OR
2 1 383 997 1468 AND
2 1 1256 102 1469 AND
2 1 1468 1469 1470 OR
2 1 383 1007 1471 AND
2 1 1256 101 1472 AND
2 1 1471 1472 1473 OR
2 1 383 1017 1474 AND
2 1 1256 100 1475 AND
2 1 1474 1475 1476 OR
2 1 383 1027 1477 AND
2 1 1256 99 1478 AND
2 1 1477 1478 1479 OR
2 1 378 951 1480 AND
2 1 1257 114 1481 AND
2 1 1480 1481 1482 OR
2 1 378 963 1483 AND
2 1 1257 113 1484 AND
2 1 1483 1484 1485 OR
2 1 378 975 1486 AND
2 1 1257 112 1487 AND
2 1 1486 1487 1488 OR
2 1 378 987 1489 AND
2 1 1257 111 1490 AND
2 1 1489 1490 1491 OR
2 1 378 997 1492 AND
2 1 1257 110 1493 AND
2 1 1492 1493 1494 OR
2 1 378 1007 1495 AND
2 1 1257 109 1496 AND
2 1 1495 1496 1497 OR
2 1 378 1017 1498 AND
2 1 1257 108 1499 AND
2 1 1498 1499 1500 OR
2 1 378 1027 1501 AND
2 1 1257 107 1502 AND
2 1 1501 1502 1503 OR
2 1 373 951 1504 AND
2 1 1258 122 1505 AND
2 1 1504 1505 1506 OR
2 1 373 963 1507 AND
2 1 1258 121 1508 AND
2 1 1507 1508 1509 OR
2 1 373 975 1510 AND
2 1 1258 120 1511 AND
2 1 1510 1511 1512 OR
2 1 373 987 1513 AND
2 1 1258 119 1514 AND
2 1 1513 1514 1515 OR
2 1 373 997 1516 AND
2 1 1258 118 1517 AND
2 1 1516 1517 1518 OR
2 1 373 1007 1519 AND
2 1 1258 117 1520 AND
2 1 1519 1520 1521 OR
2 1 373 1017 1522 AND
2 1 1258 116 1523 AND
2 1 1522 1523 1524 OR
2 1 373 1027 1525 AND
2 1 1258 115 1526 AND
2 1 1525 1526 1527 OR
2 1 368 951 1528 AND
2 1 1259 130 1529 AND
2 1 1528 1529 1530 OR
2 1 368 963 1531 AND
2 1 1259 129 1532 AND
2 1 1531 1532 1533 OR
2 1 368 975 1534 AND
2 1 1259 128 1535 AND
2 1 1534 1535 1536 OR
2 1 368 987 1537 AND
2 1 1259 127 1538 AND
2 1 1537 1538 1539 OR
2 1 368 997 1540 AND
2 1 1259 126 1541 AND
2 1 1540 1541 1542 OR
2 1 368 1007 1543 AND
2 1 1259 125 1544 AND
2 1 1543 1544 1545 OR
2 1 368 1017 1546 AND
2 1 1259 124 1547 AND
2 1 1546 1547 1548 OR
2 1 368 1027 1549 AND
2 1 1259 123 1550 AND
2 1 1549 1550 1551 OR
2 1 363 951 1552 AND
2 1 1260 138 1553 AND
2 1 1552 1553 1554 OR
2 1 363 963 1555 AND
2 1 1260 137 1556 AND
2 1 1555 1556 1557 OR
2 1 363 975 1558 AND
2 1 1260 136 1559 AND
2 1 1558 1559 1560 OR
2 1 363 987 1561 AND
2 1 1260 135 1562 AND
2 1 1561 1562 1563 OR
2 1 363 997 1564 AND
2 1 1260 134 1565 AND
2 1 1564 1565 1566 OR
2 1 363 1007 1567 AND
2 1 1260 133 1568 AND
2 1 1567 1568 1569 OR
2 1 363 1017 1570 AND
2 1 1260 132 1571 AND
2 1 1570 1571 1572 OR
2 1 363 1027 1573 AND
2 1 1260 131 1574 AND
2 1 1573 1574 1575 OR
2 1 358 951 1576 AND
2 1 1261 146 1577 AND
2 1 1576 1577 1578 OR
2 1 358 963 1579 AND
2 1 1261 145 1580 AND
2 1 1579 1580 1581 OR
2 1 358 975 1582 AND
2 1 1261 144 1583 AND
2 1 1582 1583 1584 OR
2 1 358 987 1585 AND
2 1 1261 143 1586 AND
2 1 1585 1586 1587 OR
2 1 358 997 1588 AND
2 1 1261 142 1589 AND
2 1 1588 1589 1590 OR
2 1 358 1007 1591 AND
2 1 1261 141 1592 AND
2 1 1591 1592 1593 OR
2 1 358 1017 1594 AND
2 1 1261 140 1595 AND
2 1 1594 1595 1596 OR
2 1 358 1027 1597 AND
2 1 1261 139 1598 AND
2 1 1597 1598 1599 OR
2 1 353 951 1600 AND
2 1 1262 154 1601 AND
2 1 1600 1601 1602 OR
2 1 353 963 1603 AND
2 1 1262 153 1604 AND
2 1 1603 1604 1605 OR
2 1 353 975 1606 AND
2 1 1262 152 1607 AND
2 1 1606 1607 1608 OR
2 1 353 987 1609 AND
2 1 1262 151 1610 AND
2 1 1609 1610 1611 OR
2 1 353 997 1612 AND
2 1 1262 150 1613 AND
2 1 1612 1613 1614 OR
2 1 353 1007 1615 AND
2 1 1262 149 1616 AND
2 1 1615 1616 1617 OR
2 1 353 1017 1618 AND
2 1 1262 148 1619 AND
2 1 1618 1619 1620 OR
2 1 353 1027 1621 AND
2 1 1262 147 1622 AND
2 1 1621 1622 1623 OR
2 1 348 951 1624 AND
2 1 1263 162 1625 AND
2 1 1624 1625 1626 OR
2 1 348 963 1627 AND
2 1 1263 161 1628 AND
2 1 1627 1628 1629 OR
2 1 348 975 1630 AND
2 1 1263 160 1631 AND
2 1 1630 1631 1632 OR
2 1 348 987 1633 AND
2 1 1263 159 1634 AND
2 1 1633 1634 1635 OR
2 1 348 997 1636 AND
2 1 1263 158 1637 AND
2 1 1636 1637 1638 OR
2 1 348 1007 1639 AND
2 1 1263 157 1640 AND
2 1 1639 1640 1641 OR
2 1 348 1017 1642 AND
2 1 1263 156 1643 AND
2 1 1642 1643 1644 OR
2 1 348 1027 1645 AND
2 1 1263 155 1646 AND
2 1 1645 1646 1647 OR
1 1 1075 1648 LID
1 1 1072 1649 LID
1 1 1069 1650 LID
1 1 1066 1651 LID
1 1 1083 1652 LID
1 1 1080 1653 LID
1 1 1063 1654 LID
1 1 1060 1655 LID
1 1 1057 1656 LID
1 1 1054 1657 LID
1 1 1223 1658 LID
1 1 1247 1659 LID
1 1 1244 1660 LID
1 1 1241 1661 LID
1 1 1238 1662 LID
1 1 1235 1663 LID
1 1 1232 1664 LID
1 1 1229 1665 LID
1 1 1226 1666 LID
1 1 1139 1667 LID
1 1 1136 1668 LID
1 1 1133 1669 LID
1 1 1130 1670 LID
1 1 1127 1671 LID
1 1 1124 1672 LID
1 1 1121 1673 LID
1 1 1118 1674 LID
1 1 1051 1675 LID
1 1 1048 1676 LID
1 1 1045 1677 LID
1 1 1042 1678 LID
1 1 1039 1679 LID
1 1 1036 1680 LID
1 1 1033 1681 LID
1 1 1030 1682 LID
1 1 1287 1683 LID
1 1 1284 1684 LID
1 1 1281 1685 LID
1 1 1278 1686 LID
1 1 1275 1687 LID
1 1 1272 1688 LID
1 1 1269 1689 LID
1 1 1266 1690 LID
1 1 1311 1691 LID
1 1 1308 1692 LID
1 1 1305 1693 LID
1 1 1302 1694 LID
1 1 1299 1695 LID
1 1 1296 1696 LID
1 1 1293 1697 LID
1 1 1290 1698 LID
1 1 1335 1699 LID
1 1 1332 1700 LID
1 1 1329 1701 LID
1 1 1326 1702 LID
1 1 1323 1703 LID
1 1 1320 1704 LID
1 1 1317 1705 LID
1 1 1314 1706 LID
1 1 1359 1707 LID
1 1 1356 1708 LID
1 1 1353 1709 LID
1 1 1350 1710 LID
1 1 1347 1711 LID
1 1 1344 1712 LID
1 1 1341 1713 LID
1 1 1338 1714 LID
1 1 1383 1715 LID
1 1 1380 1716 LID
1 1 1377 1717 LID
1 1 1374 1718 LID
1 1 1371 1719 LID
1 1 1368 1720 LID
1 1 1365 1721 LID
1 1 1362 1722 LID
1 1 1407 1723 LID
1 1 1404 1724 LID
1 1 1401 1725 LID
1 1 1398 1726 LID
1 1 1395 1727 LID
1 1 1392 1728 LID
1 1 1389 1729 LID
1 1 1386 1730 LID
1 1 1431 1731 LID
1 1 1428 1732 LID
1 1 1425 1733 LID
1 1 1422 1734 LID
1 1 1419 1735 LID
1 1 1416 1736 LID
1 1 1413 1737 LID
1 1 1410 1738 LID
1 1 1455 1739 LID
1 1 1452 1740 LID
1 1 1449 1741 LID
1 1 1446 1742 LID
1 1 1443 1743 LID
1 1 1440 1744 LID
1 1 1437 1745 LID
1 1 1434 1746 LID
1 1 1479 1747 LID
1 1 1476 1748 LID
1 1 1473 1749 LID
1 1 1470 1750 LID
1 1 1467 1751 LID
1 1 1464 1752 LID
1 1 1461 1753 LID
1 1 1458 1754 LID
1 1 1503 1755 LID
1 1 1500 1756 LID
1 1 1497 1757 LID
1 1 1494 1758 LID
1 1 1491 1759 LID
1 1 1488 1760 LID
1 1 1485 1761 LID
1 1 1482 1762 LID
1 1 1527 1763 LID
1 1 1524 1764 LID
1 1 1521 1765 LID
1 1 1518 1766 LID
1 1 1515 1767 LID
1 1 1512 1768 LID
1 1 1509 1769 LID
1 1 1506 1770 LID
1 1 1551 1771 LID
1 1 1548 1772 LID
1 1 1545 1773 LID
1 1 1542 1774 LID
1 1 1539 1775 LID
1 1 1536 1776 LID
1 1 1533 1777 LID
1 1 1530 1778 LID
1 1 1575 1779 LID
1 1 1572 1780 LID
1 1 1569 1781 LID
1 1 1566 1782 LID
1 1 1563 1783 LID
1 1 1560 1784 LID
1 1 1557 1785 LID
1 1 1554 1786 LID
1 1 1599 1787 LID
1 1 1596 1788 LID
1 1 1593 1789 LID
1 1 1590 1790 LID
1 1 1587 1791 LID
1 1 1584 1792 LID
1 1 1581 1793 LID
1 1 1578 1794 LID
1 1 1623 1795 LID
1 1 1620 1796 LID
1 1 1617 1797 LID
1 1 1614 1798 LID
1 1 1611 1799 LID
1 1 1608 1800 LID
1 1 1605 1801 LID
1 1 1602 1802 LID
1 1 1647 1803 LID
1 1 1644 1804 LID
1 1 1641 1805 LID
1 1 1638 1806 LID
1 1 1635 1807 LID
1 1 1632 1808 LID
1 1 1629 1809 LID
1 1 1626 1810 LID
`;
