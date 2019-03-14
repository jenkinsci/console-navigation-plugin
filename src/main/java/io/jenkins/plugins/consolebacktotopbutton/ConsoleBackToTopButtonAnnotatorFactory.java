package io.jenkins.plugins.consolebacktotopbutton;

import hudson.Extension;
import hudson.console.ConsoleAnnotator;
import hudson.console.ConsoleAnnotatorFactory;

/**
 * @author Stefan Welsch<stefan.welsch@b-nova.com>
 */
@Extension
public class ConsoleBackToTopButtonAnnotatorFactory extends ConsoleAnnotatorFactory {

	@Override
	public ConsoleAnnotator newInstance(Object context) {
		return new ConsoleBackToTopButtonAnnotator();
	}


}
