<?php

class Piggy_Bank {

    private $euro;
    private $cent;
    private $mood;
    private $output;

    public function __construct()
    {
        $this->euro = 0;
        $this->cent = 0;
        $this->mood = "neutral";
    }

    public function getEuro() {
        return $this->euro;
    }

    private function setEuro($euro) {
        $this->euro = $euro;
    }

    public function getCent() {
        return $this->cent;
    }

    private function setCent($cent) {
        $this->euro += ($cent - $cent % 100)/100;
        $this->cent = $cent % 100;
    }

    public function getMood() {
        $mood = $this->mood;
        $this->mood = 'neutral';
        return $mood;
    }

    private function setMood($mood) {
        $this->mood = $mood;
    }

    public function getOutput()
    {
        $this->addOutput($this->indexMoney());
        $output = $this->output;
        $this->output = "";
        return $output;
    }

    private function addOutput($output) {
        $this->output .= $output;
    }

    private function indexMoney() {
        return "There are  " . $this->getEuro() . " Euro and " . $this->getCent() . " Cent inside your piggy bank. <br> That is a total amount of " . ($this->getEuro() + $this->getCent()/100) . " Euro.<br>";
    }

    public function addEuro($euro) {
        $this->euro += $euro;
        $this->addOutput("You put " . $euro . " Euro into the piggy bank.<br>");
        $this->setMood('happy');
    }

    public function addCent($cent) {
        $this->euro += ($cent - $cent % 100)/100;
        $this->cent += $cent % 100;
        $this->addOutput("You put " . $cent . " Cent into the piggy bank.<br>");
        $this->setMood('happy');
    }

    public function spendMoney($euro, $cent) {
        $centBudget = $this->getCumulatedCent($this->getEuro(), $this->getCent());
        $centSpend = $this->getCumulatedCent($euro, $cent);
        if ($centBudget < $centSpend) {
            $this->addOutput("You do not have enough money for that!<br>");
            $this->setMood('angry');
        }
        else {
            $centBudget = $centBudget - $centSpend;
            $this->setCent($centBudget);
            $this->setEuro(($centBudget - $centBudget % 100)/100);
            $this->addOutput("You take " . $euro . " Euro and " . $cent . " Cent from the piggy bank.<br>");
            $this->setMood('neutral');
        }
    }

    private function getCumulatedCent($euro, $cent) {
        return $euro * 100 + $cent;
    }
}
